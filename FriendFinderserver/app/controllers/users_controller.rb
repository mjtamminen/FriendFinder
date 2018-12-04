class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def show
    @user = User.find_by(id: params[:id])
    if @user
      render json: @user
    end
  end

  def create
    @user = User.new(user_params)
    render json: @user
  end

  private

  def user_params
    params.require(:user).permit(:username, :income, :marital_status)
  end
  
end
