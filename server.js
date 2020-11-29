const createError = require('http-errors');
const http = require("http");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config()

const app = express();
const httpServer = http.Server(app);

// // view engine setup
// app.set('views', path.join(__dirname, 'src'));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

const DB_name = process.env.DATABASE;
const PORT = process.env.PORT;

const mongoDB_user = process.env.ATLAS_NAME;
const mongoDB_pass = process.env.ATLAS_PASS;
console.log(PORT);
//Display server packets
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

//directory to serve static REACT files
app.use(express.static(path.join(__dirname, 'src')));

console.log("poopie");
// http server
const port = PORT || 3000;
const server = httpServer.listen(port, function () {
    console.log(`listening at port: ${port}`);
});

<<<<<<< HEAD
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

// const splice = new org.orgs(0,'SPLICE', 'Club', 'test');

const pat = require('./app/models/patient');
const presc = require('./app/models/prescription');
const med = require('./app/models/medication');

// const splice = new pat.patient(0,0,0,0,"MEN",0,0,0,0,0,0);
=======
//rendering pages
app.get("/test", function(req, res){
    res.send({ express: 'ITS ALIVE!' });
});

>>>>>>> 821a9284c76e3649e772ba8dbc1a4aa2ec737d51

//Connected server to MongoDB Atlas
const connectionString =  `mongodb://${mongoDB_user}:${mongoDB_pass}@ehr-test-shard-00-00.d1mre.mongodb.net:27017,ehr-test-shard-00-01.d1mre.mongodb.net:27017,ehr-test-shard-00-02.d1mre.mongodb.net:27017/${DB_name}?ssl=true&replicaSet=atlas-c40bxx-shard-0&authSource=admin&retryWrites=true&w=majority`;

//import documents
const doc = require("./app/controllers/documents");
//import queries
const que = require("./app/controllers/queries");

;(async () =>{
    
    const connector = mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    //test queries
    patient_arg = ["name",new Date(), "test","test","test","test","test","test","test","test","test"];
    que.createRecord(doc.patient, doc.createPatient, patient_arg);
})();

<<<<<<< HEAD
patient.find(function(err, Patient){
    if (err) return console.error(err);
    console.log(Patient);
})



//const splice = new pat.patient(0,0,0,0,"MEN",0,0,0,0,0,0);
//console.log("TEST", splice.all);


=======
>>>>>>> 821a9284c76e3649e772ba8dbc1a4aa2ec737d51
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
