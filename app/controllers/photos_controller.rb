class PhotosController < ApplicationController
  def show
    @photo = Photo.where(["selected = ?", "true"]).first
    @characters = Character.where("photo_id = ?", @photo.id)
    @source = @photo.url
  end
end
