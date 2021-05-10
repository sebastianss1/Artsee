Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create] do
        resources :follows, only: [:index, :create, :destroy]
        resources :likes, only: [:index, :create, :destroy]
    end 
    resources :artists, only: [:show]
    resources :artworks, only: [:show]
    resources :galleries, only: [:show]
    resource :session, only: [:create, :destroy]
  end 

  root "static_pages#root"
end
