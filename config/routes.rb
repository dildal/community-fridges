Rails.application.routes.draw do
  resources :fridges, only: [:index]
  # resources :users
  # resources :foods
  # route to test your configuration
end
