import foodModel from "../models/foodModel.js";
import fs from 'fs'

export const addFood = async (req, res) => {
  // Check the request body and file for debugging
  console.log('Request Body:', req.body);
  console.log('File:', req.file);

  // Destructure the fields from the request body and trim any extra spaces
  const name = req.body.name.trim();
  const description = req.body.description.trim();
  const price = parseFloat(req.body.price.trim());  // Ensure price is a number and trim spaces
  const category = req.body.category.trim();

  // Get the uploaded file's filename (if an image was uploaded)
  const image = req.file ? req.file.filename : null;

  try {
    // Create a new food document with the data from the request
    const newFood = new foodModel({
      name,
      description,
      price,  // This should now be a valid number
      category,
      image,  // Save the image filename in the database
    });

    // Save the food document to the database
    await newFood.save();

    // Respond with the saved food data
    res.status(201).json(newFood);

  } catch (error) {
    // Log the specific error to debug
    console.error("Error saving food to database:", error.message);

    // Respond with an error if something went wrong
    res.status(500).json({ message: 'Error adding food', error });
  }
};


// get All food list 

export const listFood=async(req,res)=>{
     try {
        const foods=await foodModel.find({});
        res.json({success:true,data:foods})
     } catch (error) {
        console.log(error)
        res.json({success:false,message:error})
     }
}

// remove food item

export const removeFood=async(req,res)=>{
    try {
        const food=await foodModel.findById(req.body.id)
        fs.unlink(`uploads/${food.image}`,()=>{})
        res.json({success:true,message:"Food item removed successfully"})
        await foodModel.findByIdAndDelete(req.body.id);
    } catch (error) {
        console.log(error)
        res.json({success:false,error:error})
    }
}














