import { mongoose } from "mongoose";

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  foodId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "Food",
  },
});

export const Category = mongoose.model("Category", categorySchema);
