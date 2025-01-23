const mongoose = require('mongoose');

const connectDB = async () => {
  // Log the MongoDB URI to ensure it's correctly loaded from environment variables
  console.log('MONGO_URI:', process.env.MONGO_URI);

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
  } catch (err) {
    console.error(`Error: ${err.message}`.red.bold);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
