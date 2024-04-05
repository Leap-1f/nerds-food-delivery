import mongoose from "mongoose";

const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    ingredient: {type: String, required: true},
    price: {type: Number, required: true}, 
    discountedPrice: {type: Number},
}, {timestamps: true});

export const Food = mongoose.model('Food', foodSchema);
