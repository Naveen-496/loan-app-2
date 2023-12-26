import mongoose from "mongoose";

let connected = false;

export const connectToDb = async () => {
  if (connected) {
    console.log("already connected");
    return;
  }

  try {
    await mongoose.connect(
      "mongodb+srv://naveenreddys496:Naveen-496@loanapp.bnx1aw3.mongodb.net/?retryWrites=true&w=majority"
    );
    connected = true;
    console.log("connected to mongodb successfully");
  } catch (error) {
    console.log(error);
  }
};
