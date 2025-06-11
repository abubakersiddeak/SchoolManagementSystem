import mongoose from "mongoose";

const ClassSchema = new mongoose.Schema({
  name: String,
  section: String,
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: "Teacher" },
});

export default mongoose.models.Class || mongoose.model("Class", ClassSchema);
