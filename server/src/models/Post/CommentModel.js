// Creating Post Schema

import mongoose from "mongoose";
const commentSchema = new mongoose.Schema(
  {
    post_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Posts",
    },
    comments: [
      {
        message: String,
        user_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
          required: true,
        },
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const CommentModel = mongoose.model("PostComments", commentSchema);
