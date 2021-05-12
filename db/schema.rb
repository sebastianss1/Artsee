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

ActiveRecord::Schema.define(version: 2021_05_12_142141) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "active_storage_attachments", force: :cascade do |t|
    t.string "name", null: false
    t.string "record_type", null: false
    t.bigint "record_id", null: false
    t.bigint "blob_id", null: false
    t.datetime "created_at", null: false
    t.index ["blob_id"], name: "index_active_storage_attachments_on_blob_id"
    t.index ["record_type", "record_id", "name", "blob_id"], name: "index_active_storage_attachments_uniqueness", unique: true
  end

  create_table "active_storage_blobs", force: :cascade do |t|
    t.string "key", null: false
    t.string "filename", null: false
    t.string "content_type"
    t.text "metadata"
    t.bigint "byte_size", null: false
    t.string "checksum", null: false
    t.datetime "created_at", null: false
    t.index ["key"], name: "index_active_storage_blobs_on_key", unique: true
  end

  create_table "artists", force: :cascade do |t|
    t.string "name", null: false
    t.string "birth_year", null: false
    t.string "death_year", null: false
    t.integer "gallery_id", null: false
    t.text "bio"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["birth_year"], name: "index_artists_on_birth_year"
    t.index ["death_year"], name: "index_artists_on_death_year"
    t.index ["gallery_id"], name: "index_artists_on_gallery_id"
    t.index ["name"], name: "index_artists_on_name"
  end

  create_table "artworks", force: :cascade do |t|
    t.string "title", null: false
    t.string "year", null: false
    t.integer "artist_id", null: false
    t.string "description", null: false
    t.float "height_dimensions", null: false
    t.float "width_dimensions", null: false
    t.integer "medium_id", null: false
    t.boolean "availability", null: false
    t.integer "price", null: false
    t.text "about"
    t.string "condition"
    t.string "signature"
    t.boolean "certificate_of_authenticity"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["artist_id"], name: "index_artworks_on_artist_id"
    t.index ["availability"], name: "index_artworks_on_availability"
    t.index ["description"], name: "index_artworks_on_description"
    t.index ["height_dimensions"], name: "index_artworks_on_height_dimensions"
    t.index ["medium_id"], name: "index_artworks_on_medium_id"
    t.index ["price"], name: "index_artworks_on_price"
    t.index ["title", "artist_id"], name: "index_artworks_on_title_and_artist_id", unique: true
    t.index ["title"], name: "index_artworks_on_title"
    t.index ["width_dimensions"], name: "index_artworks_on_width_dimensions"
  end

  create_table "follows", force: :cascade do |t|
    t.integer "follower_id", null: false
    t.string "followable_type"
    t.bigint "followable_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["followable_type", "followable_id"], name: "index_follows_on_followable_type_and_followable_id"
  end

  create_table "galleries", force: :cascade do |t|
    t.string "name", null: false
    t.string "location", null: false
    t.text "about"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["location"], name: "index_galleries_on_location"
    t.index ["name"], name: "index_galleries_on_name"
  end

  create_table "likes", force: :cascade do |t|
    t.integer "liker_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["liker_id"], name: "index_likes_on_liker_id", unique: true
  end

  create_table "mediums", force: :cascade do |t|
    t.string "name", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["name"], name: "index_mediums_on_name"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "name", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "reason_for_using"
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["name"], name: "index_users_on_name"
    t.index ["session_token"], name: "index_users_on_session_token", unique: true
  end

  add_foreign_key "active_storage_attachments", "active_storage_blobs", column: "blob_id"
end
