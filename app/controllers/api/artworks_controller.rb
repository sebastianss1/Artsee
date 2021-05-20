class Api::ArtworksController < ApplicationController 

  def index 
    @artworks = Artwork.all
    render 'api/artworks/index'
  end 

 def show
    @artwork = Artwork.find(params[:id])

    if @artwork 
      render 'api/artworks/show'
    else
      render json: @artwork.errors.full_messages 
    end 
  end

    def like
      @artwork = Artwork.find(params[:id])
      current_user.liked_artworks << @artwork
      render 'api/artworks/show'
  end

    def unlike
      @artwork = Artwork.find(params[:id])
      like = Like.find_by(liker_id: current_user.id)
      like.destroy
      render 'api/artworks/show'
  end
end 