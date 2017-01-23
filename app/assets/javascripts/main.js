var x;
var y;
var photoId;
var $popup = $('.popup');

$("#photo").click(function(event) {
  var popupY = event.clientY;

  if(popupY >= ($("#photo").height()) - $('.popup').height()) {
    popupY = ($("#photo").height()) - ($('.popup').height() + 25);
  };

  togglePopup(event.clientX+10, popupY, $popup);

  // Find mouse position in image element, and call function to check if character was clicked
  x = event.offsetX;
  y = event.offsetY;
  photoId = $(this).attr('data-id'); 
});

$(".character-choice").click(function(event) {
  var name = event.target.id;
  getCharacter(x, y, name, photoId);
  $popup.hide();
});

$("body").on('click', '#play-again', function(event) {
  event.preventDefault();
  location.reload();
});

function togglePopup(x,y, popup) {
  popup.css({
    'left': x,
    'top': y
  });
  if(popup.is(":visible")) {
    popup.hide();
  } else if(!$(".error-message").is(":visible")) {
    popup.show();
  }
}

function getCharacter(x, y, name, photoId) {
  $.ajax({
    url: '/verify',
    type: 'GET',
    data: { name: name, photo: photoId},
    contentType: 'application/json; charset=utf-8',
    success: function (response) {
      var character = response[0]
      var result = checkPosition(x, y, character);
      if(result) {
        encloseCharacter(character);
        removeCharacter(character);
      } else {
        $error = $('<div class="error-message">Nobody here. Try again!</div>');
        $("body").prepend($error);
        togglePopup(x, y, $error);
        $(document).click(function(event) {
          $error.hide();
        });
      }
    },
    error: function () {
      console.log("error");
    }
  });
}

function checkPosition(x, y, character) {
  var sizeX = character['sizeX'];
  var sizeY = character['sizeY'];
  var positionX = character['positionX'];
  var positionY = character['positionY'];

  if((x >= positionX && x <= positionX + sizeX) 
    && (y >= positionY && y <= positionY + sizeY)) {
    return true;
  } else {
    return false;
  }
}

function encloseCharacter(character) {
  var outline = $('<div class="outline"></div>');
  outline.css({
    top: character.positionY + 30,
    left: character.positionX,
    height: character.sizeY,
    width: character.sizeX
  });
  $("body").append(outline);
}

function removeCharacter(character) {
  var name = "#" + character['name'];
  $popup.find(name).remove();
  if(!$popup.find(".character-choice").length) {
    victory();
  }
}

// http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport/7557433#7557433
function isElementInViewport (el) {
    //special bonus for those using jQuery
    if (typeof jQuery === "function" && el instanceof jQuery) {
        el = el[0];
    }

    var rect = el.getBoundingClientRect();

    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
        rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
    );
}

function victory() {
  var $gameOver = $('<div class="game-over">You won! <a id="play-again">Play again?</a></div>');
  $("body").append($gameOver);
}