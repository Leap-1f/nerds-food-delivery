import {Router} from 'express';
import {loginUser, getUserInfo} from '../controller/user.js';

const user = Router();

user.route("/login").post(loginUser);
user.route("/info").post(getUserInfo);
export {user};
