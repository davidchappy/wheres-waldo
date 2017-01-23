class PhotosController < ApplicationController
  def show
    @photo = Photo.where(["selected = ?", "true"]).first
    @characters = Character.where("photo_id = ?", @photo.id)
    @source = @photo.url
  end

  def update
    Photo.where('selected = ?', true).each do |photo|
      photo.update_attribute('selected', false)
    end
    if params[:photo]
      @photo = Photo.find(params[:photo])
      @photo.update_attribute('selected', 'true')
    end
  end

end
