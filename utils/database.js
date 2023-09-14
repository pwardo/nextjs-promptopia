import mongoose from "mongoose";
let isConnected = false;

export const connectToDb = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB connection already established');
    return;
  };

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    isConnected = true;
    console.log('MongoDB connection established');
  } catch (error) {
    console.log(error);
  }

}