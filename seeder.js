const fs = require('fs');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// Load env vars
dotenv.config({ path: './config/config.env' });

// Load models
const Mountain = require('./models/Mountain');

// Connect to database
mongooseConnect = mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

// Read JSON files
const mountains = JSON.parse(
  fs.readFileSync(`${__dirname}/_data/mountains.json`, 'utf-8')
);

// Import data into database
const importData = async () => {
  try {
    await Mountain.create(mountains);
    console.log(`Data created...`);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Delete data from database
const deleteData = async () => {
  try {
    await Mountain.deleteMany();
    console.log(`Data destroyed...`);
    process.exit();
  } catch (error) {
    console.log(error);
  }
};

// Import or delete
if (process.argv[2] === '-i') {
  importData();
} else if (process.argv[2] === '-d') {
  deleteData();
}
