import mongoose from "mongoose";

const transactionSchema = new mongoose.Schema({
  transactionId: { type: String, required: true },
  transactionType: { type: String, enum: ["stripe", "cash_on_delivery"], required: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "user", required: true },
  orderId: { type: mongoose.Schema.Types.ObjectId, ref: "Order", required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: "completed" },
  createdAt: { type: Date, default: Date.now }
});

const transactionModel = mongoose.models.Transaction || mongoose.model("Transaction", transactionSchema);
export default transactionModel;
