class CreateGalleries < ActiveRecord::Migration[5.2]
  def change
    create_table :galleries do |t|
      t.string :name, null: false 
      t.string :location, null: false 
      t.text :about

      t.timestamps
    end
    add_index :galleries, :name 
    add_index :galleries, :location
  end
end
