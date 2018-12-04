class User < ApplicationRecord
  has_many :user_celebrities
  has_many :users, through: :user_celebrities
  has_many :encounters
  has_many :friends, through: :encounters
end
