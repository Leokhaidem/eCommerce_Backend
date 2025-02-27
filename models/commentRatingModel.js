const mongoose = require("mongoose");
const commentRatingSchema = new mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "product",
      required: true,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: true,
    },
    title: {
      type: String,
    },
    commentText: {
      type: String,
      required: true,
    },
    ratings: [
      {
        userId: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "users",
        },
        rating: {
          type: Number,
          min: 1,
          max: 5,
          required: true,
        },
      },
    ],
    // image_id: [
    //   {
    //     type: String,
    //   },
    // ],
  },
  { timestamps: true }
);

const commentRatingModel = mongoose.model("comments", commentRatingSchema);

module.exports = commentRatingModel;
