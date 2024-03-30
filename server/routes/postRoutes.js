import express from "express";
import { addPost } from "../controllers/postController.js";
import authUser from "../middlewares/authUser.js";

const router = express.Router();

router.post("/add", authUser, addPost);

export default router;