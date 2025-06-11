import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("db connect success");
  } catch (error) {
    console.log("mongodb connection error");
  }
};
export default connectDB;
