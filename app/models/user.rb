class User < ApplicationRecord 
  attr_reader :password
  validates :email, :name, :password_digest, :session_token, presence: true
  validates :email, uniqueness: true
  validates :session_token, uniqueness: true 
  validates :password, length: { minimum: 8, allow_nil: true }

  has_many :liked_artworks,
  foreign_key: :liker_id,
  class_name: :Like,
  dependent: :destroy


  has_many :followed_entities,
    foreign_key: :follower_id,
    class_name: :Follow,
    dependent: :destroy

  has_many :followed_artists,
    through: :followed_entities,
    source: :followable,
    source_type: 'Artist',
    dependent: :destroy 

  has_many :followed_galleries,
  through: :followed_entities,
  source: :followable,
  source_type: 'Gallery',
  dependent: :destroy


  before_validation :ensure_session_token

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    return nil if user.nil?
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
  end



end 