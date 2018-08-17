Rails.application.routes.draw do

  namespace :api do
    namespace :v1 do
      resources :todo_items
      resources :todo_lists
      end
  end
end
