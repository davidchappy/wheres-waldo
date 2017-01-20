class PhotosController < ApplicationController
  def show
    @photo = Photo.where(["selected = ?", "true"]).first
    @source = @photo.url
  end
end
