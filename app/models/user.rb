class User < ApplicationRecord
    has_secure_password
    has_many :foods
    has_many :fridges, through: :foods
end
