import mongoose, { ConnectOptions } from "mongoose";
import "dotenv/config";

mongoose.connection.on("connected", () =>
  console.log("Database connection on")
);

mongoose.connection.on("disconnected", () =>
  console.log("Database connection off")
);

const dbConnection = async () => {
  try {
    mongoose.connect(
      process.env.DB_URI as any,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      } as ConnectOptions
    );
  } catch (err) {
    // if error occured kill process
    process.exit(1);
  }
};

export { dbConnection };
