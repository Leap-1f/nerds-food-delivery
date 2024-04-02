import mongoose from "mongoose";

export const foodSchema = new mongoose.Schema({
    name: {type: String, required: true},
    image: {type: String, required: true},
    ingredient: {type: String, required: true},
    price: {type: Number, required: true}, 
}, {timestamps: true});

const Food = mongoose.model('Food', foodSchema);