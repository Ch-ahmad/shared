import { CommentModel } from "../models/Post/CommentModel.js";
import { PostModel } from "../models/Post/PostModel.js";

export async function createUserPost(req, res) {
  try {
    const { caption } = req.body;
    const filename = req.file.filename;
    if (!filename) {
      return res.status(400).send({
        message: "File not found.",
      });
    }
    const post = await PostModel.create({
      caption,
      media_url: filename,
      post_type: "image",
      user_id: req.user.id,
    });
    await CommentModel.create({
      post_id: post._id,
      comments: [],
    });

    return res.status(200).send({
      message: "File uploaded successfully",
    });
  } catch (error) {
    return res.status(404).send({
      message: "Something went wrong",
      error,
    });
  }
}

export async function getAllPosts(req, res) {
  try {
    const posts = await PostModel.find({}).populate(
      "user_id",
      "name profile_image email"
    );
    return res.status(200).send({
      message: "All posts",
      data: posts,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Server error",
      error,
    });
  }
}
export async function likePostById(req, res) {
  try {
    const postId = req.params.postId;
    const { userId } = req.body;

    const post = await PostModel.findById(postId);

    if (!post) {
      return res.status(404).send({
        message: "Post not found",
      });
    }

    const isLikedByUser = post.likes?.some(
      (like) => like.user_id.toString() === userId.toString()
    );

    if (isLikedByUser) {
      // If user has already liked the post, remove their ID from likes array
      await PostModel.findByIdAndUpdate(postId, {
        $pull: { likes: { user_id: userId } },
      });
      return res.status(200).send({
        message: "Post unliked",
      });
    } else {
      // If user has not liked the post, add their ID to likes array
      await PostModel.findByIdAndUpdate(postId, {
        $push: { likes: { user_id: userId } },
      });
      return res.status(200).send({
        message: "Post liked",
      });
    }
  } catch (error) {
    return res.status(500).send({
      message: "Something went wrong",
      error,
    });
  }
}

export async function getAlltheCommentOfSinglePost(req, res) {
  try {
    const postId = req.params.postId;
    const comments = await CommentModel.findOne({ post_id: postId })
      .populate({
        path: "comments.user_id",
        select: "name profile_image email",
      })
      .exec();

    return res.status(200).send({
      message: "All comments",
      data: comments.comments,
    });
  } catch (error) {
    return res.status(500).send({
      message: "Server error",
      error,
    });
  }
}

export async function addCommentToPost(req, res) {
  try {
    const { postId } = req.params;
    const { comment, user_id } = req.body;
    const post = await CommentModel.findOneAndUpdate(
      { post_id: postId }, // Convert postId to ObjectId for comparison
      { $push: { comments: { message: comment, user_id } } }, // Use $push to add comment to comments array
      { new: true } // Return the updated document and do not create new if not found
    );

    if (!post) {
      return res.status(404).send({
        message: "Post not found",
      });
    }

    return res.status(200).send({
      message: "Comment added",
    });
  } catch (error) {
    return res.status(500).send({
      message: "Server Error",
      error,
    });
  }
}
