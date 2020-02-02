// const mongoose = require('mongoose');
// //Map global promises
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://brad:A12345678@dbh10.mlab.com:27107/pusherpoll')
//   .then(console.log("++++++MONGOdb connected!!!!!!")).catch(err => console.log(err));


const mongoose = require('mongoose');
const keys = require('./keys');

// Map global promises
mongoose.Promise = global.Promise;
// Mongoose Connect
mongoose
  .connect(keys.mongoURI)
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));