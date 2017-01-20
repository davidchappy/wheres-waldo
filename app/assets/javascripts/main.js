$("#photo").click(function(event) {
  togglePopup(event.clientX+10, event.clientY-10);

  // Find mouse position in image element, and call function to check if character was clicked
  var x = event.offsetX;
  var y = event.offsetY;
  var photoId = $(this).attr('data-id'); 

  $(".character-choice").click(function(event) {
    var name = event.target.id;
    getCharacter(x, y, name, photoId);
  });

});


function togglePopup(x,y) {
  var $popup = $('.popup');
  $popup.css({
    'left': x,
    'top': y
  });
  if($popup.is(":visible")) {
    $popup.hide();
  } else {
    $popup.show();
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
      } else {
        console.log("try again");
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

  console.log(x);
  console.log(y);

  // console.log(sizeX);
  // console.log(sizeY);
  // console.log(positionX);
  // console.log(positionY);

  if((x >= positionX && x <= positionX + sizeX) 
    && (y >= positionY && y <= positionY + sizeY)) {
    console.log("found the character")
    return true;
  } else {
    console.log("no character here")
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

// function endGame() {
//   location.reload();
// }