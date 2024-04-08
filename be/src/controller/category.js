import { Category } from "../../model/Category.Model.js";

export const getCategoryFood = async (request, response) => {
    const stringified = JSON.stringify(request.body);
    const parsed = JSON.parse(stringified);
    const categories = await Category.find(
      { _id: parsed.id },
      {
        _id: 1,
        name: 1,
        foodId: 1,
      }
    ).populate("foodId");
    response.status(200);
    response.send(categories);
}

export const deleteCategory = async (request, response) => {
    const stringified = JSON.stringify(request.body);
    const parsed = JSON.parse(stringified);
    if (parsed.id != "") {
      const deleteCategory = await Category.deleteOne({ _id: parsed.id });
  
      response.status(200);
      response.send("Category Deleted.");
    } else {
      response.status(400);
      response.send("Bad request.");
    }
}
