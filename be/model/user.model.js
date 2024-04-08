import { model, Schema }  from "mongoose";


export const UserModel = model("Zaya", new Schema({age: String}));