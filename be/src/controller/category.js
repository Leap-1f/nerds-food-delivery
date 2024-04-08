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
};

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
};

export const createCategory = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.name != "") {
    const category = await Category.create({
      name: parsed.name,
      foodId: [],
    });
    response.status(200);
    response.send("Category Created.");
  } else {
    response.status(400);
    response.send("Bad request.");
  }
};

export const getCatName = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const findCategory = await Category.find({ _id: parsed.id }, { name: 1 });
    let names = findCategory.map((o) => o.name);
    response.status(200);
    response.send(names);
  } else {
    response.status(400);
    response.send("Bad request.");
  }
};

export const updateCategory = async () => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const updateCategory = await Category.findOneAndUpdate(
      { _id: parsed.id },
      { name: parsed.name }
    );
    response.status(200);
    response.send("Updated.");
  } else {
    response.status(400);
    response.send("Bad request.");
  }
};

export const getCategories = async () => {
  const categories = await Category.find(
    {},
    {
      _id: 1,
      name: 1,
      foodId: 1,
    }
  );
  let names = categories.map((o) => ({ name: o.name, id: o.id }));
  response.status(200);
  response.send(names);
};
