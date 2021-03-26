const mongoose = require("mongoose");

const productsSchema = mongoose.Schema({
  merchant: String,
  product_name: String,
  product_price: String,
  product_quantity: { type: Number, default: 1 },
  product_image: String,
  product_desc: String,
  product_status: { type: String, default: "Active" },
  location_state: String,
  location_city: String,
});

mongoose.model("products", productsSchema);
