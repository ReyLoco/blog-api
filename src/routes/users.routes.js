import { Router } from "express";
import * as userCtrl from "../controllers/user.controller";
/********** USERS ROUTER *************/

const userRouter = Router();

userRouter.post("/", userCtrl.createUser);

userRouter.get("/", userCtrl.findAllUsers);

userRouter.get("/:id", userCtrl.findOneById);

userRouter.get("/find/:text", userCtrl.findUserByName);

userRouter.delete("/:id", userCtrl.deleteUser);

userRouter.put("/:id", userCtrl.updateUser);

export default userRouter;

/********** USERS ROUTER *************/
