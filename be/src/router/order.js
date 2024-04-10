import { Router } from "express";
import {
  createOrder,
  editOrder,
  deleteOrder,
  getOrders,
} from "../controller/order.js";
const order = Router();

order.route("/create").post(createOrder);
order.route("/edit").post(editOrder);
order.route("/delete").post(deleteOrder);
order.route("/").get(getOrders);
export { order };
