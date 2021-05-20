class Gallery < ApplicationRecord 
    validates :name, :location, presence: true 

    has_many :artists,
    foreign_key: :gallery_id,
    class_name: :Artist

    has_many :follows, as: :followable

    has_one_attached :photo

end 