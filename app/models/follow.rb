class Follow < ApplicationRecord 
    validates :follower_id, presence: true 
    validates :follower, uniqueness: { scope: :followee }
 
    belongs_to :follower,
    foreign_key: :follower_id,
    class_name: :User
    
    belongs_to :artist,
    class_name: :Artist

    belongs_to :followable, polymorphic: true 

end 