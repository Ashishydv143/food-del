import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  image: {
    type: String,  // Add the image field to store the filename
    required: false  // It could be optional if you want
  }
});

const foodModel = mongoose.model("food", foodSchema);
export default foodModel;
