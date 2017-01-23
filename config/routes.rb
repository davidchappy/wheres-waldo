Rails.application.routes.draw do
  get '/verify', to: 'characters#verify'
  get '/play', to: 'photos#show'
  get '/', to: 'static_pages#home'
  get '/photos/select', to: 'photos#update'
end
