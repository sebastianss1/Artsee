class Api::ArtistsController < ApplicationController 

  before_action :require_logged_in!, only: [:index]

  def show
    @artist = Artist.find(params[:id])

    if @artist 
        render '/api/artists/show'
    else 
        render json: @artist.errors.full_messages, status: 422
    end 
    
  end

end 