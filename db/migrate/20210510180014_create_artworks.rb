class CreateArtworks < ActiveRecord::Migration[5.2]
  def change
    create_table :artworks do |t|
      t.string :title, null: false 
      t.string :year, null: false 
      t.integer :artist_id, null: false 
      t.string :description, null: false 
      t.float :height_dimensions, null: false 
      t.float :width_dimensions, null: false 
      t.integer :medium_id, null: false 
      t.boolean :availability, null: false 
      t.integer :price, null: false 
      t.text :about
      t.string :condition 
      t.string :signature 
      t.boolean :certificate_of_authenticity

      t.timestamps 
    end
    add_index :artworks, :title
    add_index :artworks, :artist_id
    add_index :artworks, :description
    add_index :artworks, :height_dimensions
    add_index :artworks, :width_dimensions
    add_index :artworks, :medium_id
    add_index :artworks, :availability
    add_index :artworks, :price
    add_index :artworks, [:title, :artist_id], unique: true 
  end
end
