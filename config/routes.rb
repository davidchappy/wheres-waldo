Rails.application.routes.draw do
  get '/game-over', to: 'static_pages#game_over'
  get '/verify', to: 'characters#verify'
  get '/play', to: 'photos#show'
  get '/', to: 'static_pages#home'
  get '/photos/select', to: 'photos#update'
  get '/scores/new', to: 'scores#new'
  post '/scores', to: 'scores#create'
end
