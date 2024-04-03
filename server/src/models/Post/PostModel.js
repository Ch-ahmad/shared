// creating monogoose schema for a post
import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  media_url: {
    type: String,
    required: true,
  },
  post_type: {
    type: String,
    enum: ["image", "video", "text"],
  },
  caption: {
    type: String,
  },
  likes: [
    {
      user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
      },
    },
  ],
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

export const PostModel = mongoose.model("Posts", postSchema);
