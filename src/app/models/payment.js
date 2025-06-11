import mongoose from "mongoose";

const PaymentSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  month: String,
  amount: Number,
  isPaid: Boolean,
  paidAt: Date,
  notes: String,
});

export default mongoose.models.Payment ||
  mongoose.model("Payment", PaymentSchema);
