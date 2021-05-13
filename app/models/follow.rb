class Follow < ApplicationRecord 
    validates :follower_id, presence: true 
 
    belongs_to :user,
    foreign_key: :follower_id,
    class_name: :User

    belongs_to :followable, polymorphic: true 






end 