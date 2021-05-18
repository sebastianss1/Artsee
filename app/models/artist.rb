class Artist < ApplicationRecord 
    validates :name, :birth_year, :gallery_id, presence: true 

    has_many :artworks,
    foreign_key: :artist_id,
    class_name: :Artwork, 
    dependent: :destroy

    belongs_to :gallery,
    foreign_key: :gallery_id,
    class_name: :Gallery

    has_many :followers,
    through: :follows,
    source: :user

    has_many :follows, as: :followable

    has_one_attached :photo

end 