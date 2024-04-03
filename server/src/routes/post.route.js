import express from "express";
import { upload } from "../middleware/multer.js";
import {
  addCommentToPost,
  createUserPost,
  getAllPosts,
  getAlltheCommentOfSinglePost,
  likePostById,
} from "../controllers/post.controller.js";

const USER_POST_ROUTER = express.Router();
USER_POST_ROUTER.post(
  "/create-post",
  upload.single("post_media"),
  createUserPost
);
USER_POST_ROUTER.get("/posts", getAllPosts);
USER_POST_ROUTER.put("/like-post/:postId", likePostById);
USER_POST_ROUTER.get("/comments-by-post/:postId", getAlltheCommentOfSinglePost);
USER_POST_ROUTER.post("/add-comment/:postId", addCommentToPost);
export default USER_POST_ROUTER;
