class Medium < ApplicationRecord
    validates :name, presence: true 

    has_many :artworks,
    foreign_key: :medium_id,
    class_name: :Artwork

end 