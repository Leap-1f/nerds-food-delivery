import { Food } from "../../model/Food.Model";

export const createFood = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (
    parsed.name != "" ||
    parsed.img != "" ||
    parsed.ingredient != "" ||
    parsed.price != 0
  ) {
    const createFood = Food.create({
      name: parsed.name,
      image: parsed.img,
      ingredient: parsed.ingredient,
      price: parsed.price,
      discountedPrice: parsed.discountedPrice,
    });

    (await createFood).save().then(async (a) => {
      const updateCategoryItems = await Category.findOneAndUpdate(
        { _id: parsed.catId },
        { $push: { foodId: a.id } }
      );
    });
    let output;
    async () => {
      output = await data.save();
    };
    response.status(200);
    response.send("Created");
  } else {
    response.status(400);
    response.send("Malformed Data");
  }
};

export const deleteFood = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  if (parsed.id != "") {
    const deleteFood = await Food.findByIdAndDelete(parsed.id);
    response.status(200);
    response.send("deleted");
    const category = await Category.updateMany(
      {
        foodId: { $in: [parsed.id] },
      },
      { $pull: { foodId: parsed.id } }
    );
  } else {
    response.status(400);
    response.send("Malformed Data");
  }
};

export const updateFood = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const food = Food.findOneAndUpdate(
    { _id: parsed.id },
    {
      name: parsed.name,
      img: parsed.img,
      ingredient: parsed.desc,
      price: parsed.price,
      discountedPrice: parsed.discountedPrice,
    }
  );
  (await food).save().then(async (a) => {
    const findAndDelete = await Category.findOneAndUpdate(
      { _id: parsed.catId },
      { $pull: { foodId: a.id } }
    );
    const updateCategoryItems = await Category.findOneAndUpdate(
      { _id: parsed.newCatId },
      { $push: { foodId: a.id } }
    );
  });
};

export const getAllFood = async (request, response) => {
  const food = await Food.find({});
  const data = food.map((item) => ({
    name: item.name,
    price: item.price,
    discountedPrice: item.discountedPrice,
    id: item._id,
    img: item.image,
    ingredient: item.ingredient,
  }));
  response.status(200);
  response.send(data);
};

export const searchFood = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const food = Food.find({ name: { $regex: parsed.name, $options: "i" } });
  response.status(200);
  response.send(food);
};

export const getFoodItemsByCategory = async () => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const foods = await Category.findById(parsed.id).populate("foodId");
  var empty = [];
  if (foods.foodId != undefined) {
    const data = foods.foodId.map((item) => ({
      name: item.name,
      price: item.price,
      discountedPrice: item.discountedPrice,
      id: item._id,
      img: item.image,
      ingredient: item.ingredient,
    }));
    response.status(200);
    response.send(data);
  } else if (foods.foodId === empty) {
    response.status(400);
    response.send({ status: 400 });
  }
};
