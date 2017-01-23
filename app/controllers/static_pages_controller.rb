class StaticPagesController < ApplicationController
  def home
    @photos = Photo.all
  end

  def game_over
    @scores = Score.where('photo_id = ?', params[:photo_id]).order('time ASC')
  end
end
