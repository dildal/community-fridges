class CreateFridges < ActiveRecord::Migration[7.0]
  def change
    create_table :fridges do |t|
      t.float :lat
      t.float :lng
      t.string :name

      t.timestamps
    end
  end
end
