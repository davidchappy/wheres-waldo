class AddPhotoToCharacters < ActiveRecord::Migration[5.0]
  def change
    add_column :characters, :photo_id, :integer
  end
end
