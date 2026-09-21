import mongoose from "mongoose";
import "dotenv/config.js";
import { DB_NAME } from "../../constants.js";

const connectDB = async () => {
  try {
    const connectionINstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`,
    );
    console.log(
      `MongoDb connected !! DB_HOST : ${connectionINstance.connection.host}`,
    );
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
