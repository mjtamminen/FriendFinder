# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2018_12_04_113831) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "celebrities", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.integer "age"
    t.integer "arched_eyebrows"
    t.integer "big_lips"
    t.integer "big_nose"
    t.integer "black_hair"
    t.integer "blonde_hair"
    t.integer "brown_hair"
    t.integer "bushy_eyebrows"
    t.integer "chubby"
    t.integer "pale_skin"
    t.string "race"
    t.integer "straight_hair"
    t.integer "wavy_hair"
    t.integer "heavy_makeup"
    t.integer "high_cheekbones"
    t.integer "narrow_eyes"
    t.integer "pointy_nose"
    t.integer "receding_hairline"
    t.integer "rosy_cheeks"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "encounters", force: :cascade do |t|
    t.integer "user_id"
    t.integer "friend_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "duration"
    t.time "time"
  end

  create_table "friends", force: :cascade do |t|
    t.string "name"
    t.string "image"
    t.integer "age"
    t.integer "arched_eyebrows"
    t.integer "big_lips"
    t.integer "big_nose"
    t.integer "black_hair"
    t.integer "blonde_hair"
    t.integer "brown_hair"
    t.integer "bushy_eyebrows"
    t.integer "chubby"
    t.integer "pale_skin"
    t.string "race"
    t.integer "stright_hair"
    t.integer "wavy_hair"
    t.integer "heavy_makeup"
    t.integer "high_cheekbones"
    t.integer "narrow_eyes"
    t.integer "pointy_nose"
    t.integer "receding_hairline"
    t.integer "rosy_cheeks"
    t.integer "straight_hair"
    t.integer "index"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "user_celebrities", force: :cascade do |t|
    t.integer "user_id"
    t.integer "celebrity_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.integer "income"
    t.string "marital_status"
    t.text "training", default: [], array: true
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

end
