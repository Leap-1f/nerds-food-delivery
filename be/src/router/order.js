import { Router } from "express";
import { createOrder, editOrder, deleteOrder } from "../controller/order";
const order = Router();

order.route("/create").post(createOrder);
order.route("/edit").post(editOrder);
order.route("/delete").post(deleteOrder);
export { order };
