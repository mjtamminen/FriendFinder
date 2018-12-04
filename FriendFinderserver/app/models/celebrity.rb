class Celebrity < ApplicationRecord
  has_many :user_celebrities
  has_many :users, through: :user_celebrities
end
