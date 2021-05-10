class Api::ArtistsController < ApplicationController 

  def show
    render json: Artist.find(params[:id])
  end

end 