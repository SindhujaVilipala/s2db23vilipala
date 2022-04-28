const mongoose = require("mongoose")
const RestaurantSchema = mongoose.Schema({
Itemname: String,
Quantity:{
    type: Number,
    min:2,
    max:8
},
Price:{
    type: String,
   
    required: true
}
})
module.exports = mongoose.model("Restaurant", RestaurantSchema)