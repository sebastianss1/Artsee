class Api::SessionsController < ApplicationController 
    protect_from_forgery


  # before_action :require_logged_in!, only: [:destroy]

    def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

    if @user
      login!(@user)
      render '/api/users/show'
    else
      render json: @user.errors.full_messages, status: :unprocessable_entity
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render '/api/users/show'
    else
      render json: ["Please Login"], status: 404
    end
  end
end 