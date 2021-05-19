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
      like = Like.new(liker_id: params[:liker_id])
      if like.save
          # render /api/likes/show?
      else
        render json: like.errors.full_messages
      end
  end

    def unlike
      like = Like.find_by(liker_id: params[:liker_id])

      if like.destroy
        # render like?
      else
        render json: like.errors.full_messages
      end
  end
end 