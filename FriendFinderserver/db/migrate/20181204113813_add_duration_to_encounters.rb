class AddDurationToEncounters < ActiveRecord::Migration[5.2]
  def change
    add_column :encounters, :duration, :integer
  end
end
