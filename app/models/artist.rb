class Artist < ApplicationRecord 
    validates :name, :birth_year, :death_year, :gallery_id, presence: true 

    has_many :artworks,
    foreign_key: :artist_id,
    class_name: :Artwork 
    dependent: :destroy

    has_many :galleries,
    foreign_key: :gallery_id,
    class_name: :Gallery

    has_many :follows, as: :followable

end 