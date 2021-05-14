class Api::GalleriesController < ApplicationController 
    
    def index 
        @galleries = Gallery.all
        render '/api/galleries/index'
    end 

  # def show
  #   @gallery = Gallery.find(params[:id])

  #   if @gallery 
  #       render '/api/galleries/show'
  #   else 
  #       render json: @gallery.errors.full_messages, status: 422
  #   end 
    

end 