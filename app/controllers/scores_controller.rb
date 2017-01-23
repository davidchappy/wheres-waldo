class ScoresController < ApplicationController
  def new
    @score = Score.new
  end

  def create
    @score = Score.new(player: params[:score][:player], 
      time: params[:score][:time], photo_id: params[:score][:photo_id] )
    @score.save
    redirect_to controller: 'static_pages', action: 'game_over', photo_id: params[:score][:photo_id]
  end
end
