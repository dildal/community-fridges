class FridgesController < ApplicationController
    def index
        render json: Fridge.all, status: :ok
    end
end
