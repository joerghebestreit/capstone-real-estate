const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const estateSchema = new Schema(
  {
    city: String,
    street: String,
    price: String,
    yearBuild: String,
    interior: String,
    bedrooms: String,
    status: String,
    discription: String,
    id: Number,
    img: Array
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

module.exports = Mongoose.model("apartments", estateSchema);