class Like < ApplicationRecord
    validates :liker_id, presence: true, uniqueness: true 
    validates :artwork_id, presence: true

    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

    belongs_to :artwork,
    foreign_key: :artwork_id,
    class_name: :Artwork

end 