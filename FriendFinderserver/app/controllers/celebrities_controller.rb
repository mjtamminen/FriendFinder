class CelebritiesController < ApplicationController

  def index
    @celebrities = Celebrity.all
    render json: @celebrities
  end

  def show
    @celebrity = Celebrity.find_by(id: params[:id])
    if @celebrity
      render json: @celebrity
    else
      render json: {error: "Celebrity not found"}, status: 404
    end
  end

end
