class CreateCharacters < ActiveRecord::Migration[5.0]
  def change
    create_table :characters do |t|
      t.string :name
      t.string :size
      t.string :position

      t.timestamps
    end
  end
end
