import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log(`Connected To MongoDB Database at ${conn.connection.host}`.bgMagenta.white);
    } catch (error) {
        console.error(`Error in MongoDB connection: ${error.message}`.bgRed.white);

        // Log the stack trace during development
        if (process.env.NODE_ENV === 'development') {
            console.error(error.stack);
        }
    }
};


export default connectDB;
