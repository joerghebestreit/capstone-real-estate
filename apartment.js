const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const ApartmentSchema = new Schema(
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
    img: Array,
  },
  {
    timestamps: true,
    collection: "apartments",
    versionKey: false,
  }
);

module.exports = Mongoose.model("Apartment", ApartmentSchema);
