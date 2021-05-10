class Medium < ApplicationRecord
    validates :name, presence: true 

    belongs_to :artwork,
    foreign_key: :medium_id,
    class_name: :Artwork

end 