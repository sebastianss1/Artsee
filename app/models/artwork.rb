class Artwork < ApplicationRecord 
    validates :title, :year, :artist_id, :description, :height_dimensions, :width_dimensions, :medium_id, :availability, :price, presence: true
    validates [:title, :artist_id], uniqueness: true 

    belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :Artist

    has_one :medium,
    foreign_key: :medium_id,
    class_name: :Medium

end 