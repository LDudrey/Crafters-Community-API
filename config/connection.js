const mongoose = require('mongoose');

// Fixes Mongoose deprecationwarning about strictquery option
mongoose.set("strictQuery", false);

mongoose.connect('mongodb://127.0.0.1:27017/craftersDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Export connection
module.exports = mongoose.connection;
