class FridgesController < ApplicationController
    def index
        render json: Fridge.all, status: :ok
    end

    def show
        fridge = Fridge.find(params[:id])
        render json: fridge, status: :ok
    end
end
