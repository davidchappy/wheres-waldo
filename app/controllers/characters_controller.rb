class CharactersController < ApplicationController
  def verify
    name = params[:name]
    photo = params[:photo]
    
    @character = Character.where(photo_id: photo, name: name);
    
    respond_to do |format|
      format.json { render :json => @character }
    end
  end
end
