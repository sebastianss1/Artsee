class Artwork < ApplicationRecord 
    validates :title, :year, :artist_id, :description, :height_dimensions, :width_dimensions, :medium_id, :availability, :price, presence: true
    validates :title, uniqueness: { scope: :artist_id } 

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist

    belongs_to :medium,
    foreign_key: :medium_id,
    class_name: :Medium

    has_one_attached :photo

    has_many :likes,
    foreign_key: :artwork_id,
    class_name: :Like

end 