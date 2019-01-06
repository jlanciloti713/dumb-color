Rails.application.routes.draw do
  get '/buttons' => 'buttons#index'
  get '/' => 'buttons#index'
end
