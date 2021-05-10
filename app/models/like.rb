class Like < ApplicationRecord
    validates :liker_id, presence: true, uniqueness: true 

    belongs_to :liker,
    foreign_key: :liker_id,
    class_name: :User

end 