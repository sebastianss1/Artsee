class Api::SessionsController < ApplicationController 

  before_action :require_logged_in!, only: [:destroy]

    def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login!(@user)
      render '/'
    else
      render json: ["Invalid username/password combination"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout!
      render '/'
    else
      render json: ["Please Login"], status: 404
    end
  end
end 