const mongoose = require("mongoose")
const RestaurantSchema = mongoose.Schema({
Itemname: String,
Quantity: Number,
Price: String
})
module.exports = mongoose.model("Restaurant", RestaurantSchema)