Rails.application.routes.draw do
  get '/verify', to: 'characters#verify'
  get 'photos/show'
  get '/', to: 'photos#show'
end
