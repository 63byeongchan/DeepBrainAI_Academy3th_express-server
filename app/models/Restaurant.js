import mongoose from "mongoose";

export default function restaurantModel(mongoose) {
    const restaurantSchema = mongoose.Schema({
        id: String,
        service_id: String,
        local_entity_code: String,
        management_no: String,
        license_no: String,
        name: String,
        food_type: String,
        food_main: String,
        address: String,
        phone: String
    })

    return mongoose.model('Restaurant', restaurantSchema)
}