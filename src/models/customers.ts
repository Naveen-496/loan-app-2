import mongoose from "mongoose";

const customerSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  address: String,
});

export const Customer =
  mongoose.models.Customer || mongoose.model("Customer", customerSchema);
