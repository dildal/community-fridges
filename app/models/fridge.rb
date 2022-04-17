class Fridge < ApplicationRecord
    has_many :foods
    has_many :users, through: :foods
end
