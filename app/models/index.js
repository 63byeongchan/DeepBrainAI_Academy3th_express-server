import dotenv from 'dotenv'
import mongoose from 'mongoose'
import UserModel from './User.js'
import RestaurantModel from './Restaurant.js'
mongoose.Promise = global.Promise

const db = {}
db.mongoose = mongoose
db.url = dotenv.MONGO_URI
db.User = new UserModel(mongoose)
db.Restaurant = new RestaurantModel(mongoose)

export default db