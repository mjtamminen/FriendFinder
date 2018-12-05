class EncounterSerializer < ActiveModel::Serializer
  attributes :id, :user_id, :friend_id, :duration, :time, :friend_name

  def friend_name
    object.friend.name
  end

end
