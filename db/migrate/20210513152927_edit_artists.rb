class EditArtists < ActiveRecord::Migration[5.2]
  def change
    remove_column :artists, :death_year 
    add_column :artists, :death_year, :string
  end
end
