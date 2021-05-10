class Api::ArtworksController < ApplicationController 

 def show
    render json: Artwork.find(params[:id])
  end

    def like
    like = Like.new(liker_id: params[:liker_id])
    if like.save
      render json: like
    else
      render json: like.errors.full_messages
    end
  end

    def unlike
    like = Like.find_by(liker_id: params[:liker_id])
    if like.destroy
      render json: like
    else
      render json: like.errors.full_messages
    end
  end
end 