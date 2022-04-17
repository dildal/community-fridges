class FoodSerializer < ActiveModel::Serializer
  attributes :id, :name, :category, :quantity
  has_one :user
  has_one :fridge
end
