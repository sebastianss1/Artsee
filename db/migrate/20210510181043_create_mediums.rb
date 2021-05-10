class CreateMediums < ActiveRecord::Migration[5.2]
  def change
    create_table :mediums do |t|
      t.string :name, null: false 
      t.timestamps
    end
    add_index :mediums, :name
  end
end
