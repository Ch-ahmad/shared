import mongoose from "mongoose";

async function connect() {
  const URI = process.env.DATABASE_URI;
  try {
    await mongoose.connect(URI);
    console.log("Database connected");
  } catch (error) {
    console.error("Error connecting to database:", error);
  }
}

export default connect;
