import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
  name: String,
  fatherName: String,
  motherName: String,
  gender: String,
  dob: Date,
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  address: String,
  phone: String,
  photo: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Student ||
  mongoose.model("Student", StudentSchema);
