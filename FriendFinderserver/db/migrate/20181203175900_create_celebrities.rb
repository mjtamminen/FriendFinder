class CreateCelebrities < ActiveRecord::Migration[5.2]
  def change
    create_table :celebrities do |t|
      t.string :name
      t.string :image
      t.integer :age
      t.integer :gender
      t.integer :beard
      t.integer :mustache
      t.integer :arched_eyebrows
      t.integer :big_lips
      t.integer :big_nose
      t.integer :black_hair
      t.integer :blonde_hair
      t.integer :brown_hair
      t.integer :bushy_eyebrows
      t.integer :chubby
      t.integer :pale_skin
      t.integer :race
      t.integer :straight_hair
      t.integer :wavy_hair
      t.integer :heavy_makeup
      t.integer :high_cheekbones
      t.integer :narrow_eyes
      t.integer :pointy_nose
      t.integer :receding_hairline
      t.integer :rosy_cheeks
      t.integer :straight_hair
      t.integer :wavy_hair

      t.timestamps
    end
  end
end
