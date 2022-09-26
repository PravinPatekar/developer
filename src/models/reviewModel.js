const mongoose = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId;

const reviewSchema = new mongoose.Schema(
  {
    bookId: {
      type: ObjectId,
      required: [true, "Please provide a Book 'Id'"],
      ref: "Book",
      trim:true
    },

    reviewedBy: {
      type: String,
      required:true,
      default: "Guest",
      trim: true
    },

    reviewedAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },

    rating: {
      type: Number,
      required: [true, "please rate our book it's very important for us"],
      trim: true
    },
    review: {
      type: String,
      trim: true
    },

    isDeleted: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Review", reviewSchema);
