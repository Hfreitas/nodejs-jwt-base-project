const mongoose = require('mongoose');

const { DB_URL } = process.env;

mongoose.connect(DB_URL, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  access: {
    type: String,
  },
});

module.exports = mongoose.model('User', UserSchema);
