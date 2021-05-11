class EditUsers < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :reason_for_using
    add_column :users, :reason_for_using, :string
  end
end
