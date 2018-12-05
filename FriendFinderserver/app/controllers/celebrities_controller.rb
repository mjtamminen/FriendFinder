class CelebritiesController < ApplicationController

  def index
    @celebrities = Celebrity.all
    render json: @celebrities
  end

end
