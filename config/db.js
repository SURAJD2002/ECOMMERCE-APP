import mongoose from "mongoose";
import chalk from "chalk";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(chalk.bgMagenta.white(`Connected To MongoDB Database at ${conn.connection.host}`));
    } catch (error) {
        console.error(chalk.bgRed.white(`Error in MongoDB connection: ${error.message}`));

        // Log the stack trace during development
        if (process.env.NODE_ENV === 'development') {
            console.error(error.stack);
        }
    }
};

export default connectDB;
