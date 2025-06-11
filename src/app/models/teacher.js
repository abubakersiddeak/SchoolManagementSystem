import mongoose from "mongoose";

const TeacherSchema = new mongoose.Schema({
  name: String,
  subject: String,
  phone: String,
  email: String,
});

export default mongoose.models.Teacher ||
  mongoose.model("Teacher", TeacherSchema);
