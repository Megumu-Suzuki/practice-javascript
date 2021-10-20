Rails.application.routes.draw do

  root to: 'homes#top'
  resources :homes, omly: [:index]
end
