Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :update, :show] 
    
    resources :artworks, only: [:index, :show] do
      member do
        post :like 
        delete :unlike 
      end
    end 

      
    resources :artists, only: [:index, :show] do
      member do
        post :follow
        delete :unfollow
      end
    end 

    resources :galleries, only: [:index, :show] do
      member do
        post :follow 
        delete :unfollow 
      end 
    end 

    resource :session, only: [:create, :destroy]

  end 

  root "static_pages#root"
end 
