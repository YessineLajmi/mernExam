const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema(
  {
    pizza: {
      type: String,
      required: true,
    },
    sizes: {
      type: String,
      required: true,
    },
    notes: {
      type: String,
      maxlength: 25,
    },
    deliveryTime: {
      type: Date,
      required: true,
    },
    isdeliverd: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("order", orderSchema);
