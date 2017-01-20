class ChangeCharactersSizeAndPositionToXAndY < ActiveRecord::Migration[5.0]
  def change
    remove_column :characters, :position
    remove_column :characters, :size
    add_column :characters, :sizeX, :integer
    add_column :characters, :sizeY, :integer
    add_column :characters, :positionX, :integer
    add_column :characters, :positionY, :integer
  end
end
