class EditArtworks < ActiveRecord::Migration[5.2]
  def change
    remove_column :artworks, :price
    add_column :artworks, :price, :string
  end
end
