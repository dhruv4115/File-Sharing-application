const mongoose = require('mongoose');

module.exports = async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI); // Clean & current
    console.log('✅ MongoDB Connected');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};
