# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
puts "Seeding Database..."
categories = ["fruit", "canned goods", "vegetables", "dry goods"]

Fridge.create({name: "Bainbridge and Patchen Ave", lng: -73.9258, lat: 40.6815})
Fridge.create({name: "Bedford Ave and Lincoln Rd", lng: -73.9569, lat: 40.6611})
Fridge.create({name: "Bedford Ave and Lincoln Rd", lng: -73.9569, lat: 40.6611})
Fridge.create({name: "94th and Rutland Rd", lng: -73.9261, lat: 40.6627})

User.create({name: "Donny Dally", password: "donny_password"})

for i in 1..50
    Food.create({name: Faker::Food.dish, category: categories[rand(3)], quantity: rand(1..10), user: User.first, fridge: Fridge.find(Fridge.pluck(:id).sample)})
end

puts "Done seeding!!"