Journal::Application.routes.draw do
  root :to => "sites#root"
  namespace :api, :defaults => {format: :json} do
    resources :posts, :only  =>  [:index, :create, :destroy, :show, :update]
  end
end
