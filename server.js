const createError = require('http-errors');
const http = require("http");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const app = express();
const httpServer = http.Server(app);

// // view engine setup
// app.set('views', path.join(__dirname, 'src'));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

//Display server packets
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//directory to serve static REACT files
app.use(express.static(path.join(__dirname, 'src')));

// http server
const port = process.env.PORT || 8080;
const server = httpServer.listen(port, function () {
    console.log(`listening at port: ${port}`);
});

// //test DB schema put in input module in future
// const testSchema = new mongoose.Schema({
//     username: {
//       type: String,
//       required: [true, 'Username is required']
//     },
//     created: {
//       type: Date,
//       required: [true, 'Created date is required']
//     }
//   })
  

// //Connected server to MongoDB Atlas
// const connectionString =  "mongodb+srv://aliu:pass@ehr-test.d1mre.mongodb.net/EHR-TEST?retryWrites=true&w=majority";
// const User = mongoose.model('user', testSchema, 'user');

// mongoose.set('useNewUrlParser', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useCreateIndex', true);
// mongoose.set('useUnifiedTopology', true);
// //test database insert/find user node ./index.js --user=bob
// async function createUser(username) {
//     return new User({
//       username,
//       created: Date.now()
//     }).save()
//   }
  
//   async function findUser(username) {
//     return await User.findOne({ username })
//   }
  
//   ;(async () => {
//     const connector = mongoose.connect(connectionString)
//     const username = process.argv[2].split('=')[1]
  
//     let user = await connector.then(async () => {
//       return findUser(username)
//     })
  
//     if (!user) {
//       user = await createUser(username)
//     }
  
//     console.log(user)
//     process.exit(0)
//   })()

// import classes and mongoDB components
const org = require('./app/models/organizations');

const splice = new org.orgs(0,'SPLICE', 'Club', 'test');
console.log("TEST", splice.data);

const pat = require('./app/models/patient');

//const splice = new pat.patient(0,0,0,0,"MEN",0,0,0,0,0,0);
//console.log("TEST", splice.all);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get("env") === "development" ? err : {};

    // render the error page
    res.status(err.status || 500);

    // ******ERROR PAGE HERE*******
    res.send(`Uh oh! An ERROR occured!\nERROR:${err.status}`);
});


module.exports = app;
