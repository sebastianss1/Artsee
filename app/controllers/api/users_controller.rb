class Api::UsersController < ApplicationController 
    protect_from_forgery

    def create
        @user = User.new(user_params)

        if @user.save 
            login!(@user)
            render 'api/users/show'
        else 
            render json: ['Please enter a valid email.', 'Password required.', 'Name required.'], status: :unprocessable_entity
        end 

    end 

    def show 

    end 

    def update
        @user = User.find(params[:id])
        if user.update(user_params)
        render json: @user
        else
        render json: @user.errors.full_messages, status: :unprocessable_entity
        end
  end

    private 

    def user_params
        params.require(:user).permit(:email, :password, :name, :reason_for_using)
    end 

end 