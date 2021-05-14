class Api::ArtistsController < ApplicationController 

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

end 