import {Router} from "express";
import {methods as userController} from "./../controllers/users.controller";

const router=Router();

router.get("/", userController.getUsers);
router.post("/", userController.postUser);

export default router;