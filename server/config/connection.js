const mongoose = require('mongoose');

mongoose.connect(
  process.env.MONGDB_URI || 'mongodb://127.0.0.1:27017/contact-list6',
);

module.exports = mongoose.connection;
