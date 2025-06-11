import mongoose from "mongoose";

const ResultSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: "Student" },
  class: { type: mongoose.Schema.Types.ObjectId, ref: "Class" },
  term: String, // e.g., Midterm, Final
  subjects: [
    {
      name: String,
      marks: Number,
      grade: String,
    },
  ],
  totalMarks: Number,
  GPA: Number,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Result || mongoose.model("Result", ResultSchema);
