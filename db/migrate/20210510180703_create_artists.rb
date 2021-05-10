class CreateArtists < ActiveRecord::Migration[5.2]
  def change
    create_table :artists do |t|
      t.string :name, null: false 
      t.string :birth_year, null: false 
      t.string :death_year, null: false 
      t.integer :gallery_id, null: false 
      t.text :bio
      
      t.timestamps
    end

    add_index :artists, :name
    add_index :artists, :birth_year
    add_index :artists, :death_year
    add_index :artists, :gallery_id
  end
end
