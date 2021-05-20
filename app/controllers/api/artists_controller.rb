class Api::ArtistsController < ApplicationController 
  before_action :require_logged_in!, only: [:follow, :unfollow]

  def index 
    @artists = Artist.all
    render '/api/artists/index'
  end 

  def show
    @artist = Artist.find(params[:id])

    if @artist 
        render '/api/artists/show'
    else 
        render json: @artist.errors.full_messages, status: 422
    end 
    
  end

  def follow
    @artist = Artist.find(params[:id])
    @follow = Follow.create!(followable: @artist, user: current_user)
    render 'api/follows/follow'
  end

  def unfollow 
    @artist = Artist.find(params[:id])
    follow = Follow.find_by(
      follower_id: current_user.id,
      followable_id: @artist.id,
      followable_type: 'Artist'
    )

    follow.destroy
    render 'api/follows/unfollow'
  end
end 