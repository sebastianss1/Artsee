class Follow < ApplicationRecord 
    validates :follower_id, presence: true 

    belongs_to :followable, polymorphic: true 

    belongs_to :follower,
    class_name: :follower_id,
    class_name: :User



end 