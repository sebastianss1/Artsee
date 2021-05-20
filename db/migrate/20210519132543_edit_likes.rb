class EditLikes < ActiveRecord::Migration[5.2]
  def change
    add_column :likes, :artwork_id, :integer, null: false
    add_index :likes, :artwork_id
  end

end
