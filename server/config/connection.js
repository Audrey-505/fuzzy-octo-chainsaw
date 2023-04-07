const { connect, connection } = require('mongoose')

// const connectionString = process.env.MONGODB_URI || 'mongodb://localhost/chatDB'
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chatDB'


connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = connection


// const mongoose = require('mongoose');

// mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/chatDB', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
//   useCreateIndex: true,
//   useFindAndModify: false,
// });

// module.exports = mongoose.connection;
