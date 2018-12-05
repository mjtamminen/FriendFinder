class AddTimeToEncounters < ActiveRecord::Migration[5.2]
  def change
    add_column :encounters, :time, :time
  end
end
