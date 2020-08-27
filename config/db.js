const mongoose = require('mongoose');

const connectDB = async () => {
  const mongooseConnect = await mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });

  console.log(`MongoDB connected: ${mongooseConnect.connection.host}`);
};

module.exports = connectDB;
