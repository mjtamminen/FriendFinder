class Encounter < ApplicationRecord
  belongs_to :friend
  belongs_to :user

  def friend_name
    self.friend ? self.friend.name : ''
  end
end
