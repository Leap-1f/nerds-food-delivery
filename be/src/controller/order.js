import { Order } from "../../model/Order.Model.js";

export const createOrder = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const orderNumber = Math.floor(Math.random() * (99999 - 1 + 1) + 1);
  const order = await Order.create({
    userId: parsed.uId,
    orderNumber: orderNumber,
    foods: parsed.fId,
    totalPrice: parsed.totalPrice,
    process: parsed.state,
    district: parsed.district,
    khoroo: parsed.khoroo,
    apartment: parsed.apartment,
  });
  response.status(200);
  response.send("created");
};
export const editOrder = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const order = await Order.findByIdAndUpdate(parsed.id, {
    process: parsed.state,
  });
  response.status(200);
  response.send("edited");
};
export const deleteOrder = async (request, response) => {
  const stringified = JSON.stringify(request.body);
  const parsed = JSON.parse(stringified);
  const order = await Order.findByIdAndDelete(parsed.id);
  response.status(200);
  response.send("deleted");
};
export const getOrders = async (request, response) => {
  const order = await Order.find({});
  response.status(200);
  response.send(order);
};
