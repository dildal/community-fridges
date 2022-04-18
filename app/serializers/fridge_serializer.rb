class FridgeSerializer < ActiveModel::Serializer
  attributes :name, :lng, :lat, :id
  has_many :foods
end
