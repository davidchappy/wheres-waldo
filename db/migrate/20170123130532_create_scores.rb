class CreateScores < ActiveRecord::Migration[5.0]
  def change
    create_table :scores do |t|
      t.string :player
      t.integer :time
      t.integer :photo_id
      t.timestamps
    end
  end
end
