const Mongoose = require("mongoose");
const { Schema } = Mongoose;
const ApartmentSchema = new Schema(
  {
    City: String,
    Street: String,
    Price: String,
    YearBuild: String,
    Interior: String,
    Bedrooms: String,
    Status: String,
    Discription: String,
    ID: String,
    img: Array,
    Option: String
  },
  {
    timestamps: true,
    collection: "apartments",
    versionKey: false,
  }
);

module.exports = Mongoose.model("Apartment", ApartmentSchema);
