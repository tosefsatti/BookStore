import { Router } from "express";
import  { signup } from "../controller/user.controller.js";
import { login } from "../controller/user.controller.js";


const router = Router();

router.post("/signup", signup);
router.post("/login", login)

export default router;