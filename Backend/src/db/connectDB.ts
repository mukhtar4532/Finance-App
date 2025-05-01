import { log } from "console";
import mongoose from "mongoose";

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI as string);

    console.log("MongoDB connected....");
  } catch (error) {
    console.log(`MongoDB connection Failed ${error}`);
    process.exit(1);
  }
};
