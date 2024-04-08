import { Router } from "express";
import { loginUser } from "../controller/user.js";

const user = Router();

// user.route("/signup").post(addNewUser);
user.route("/login").post(loginUser);
export { user };
