class ChangeSourceToUrl < ActiveRecord::Migration[5.0]
  def change
    remove_column :photos, :source
    add_column :photos, :url, :string 
  end
end