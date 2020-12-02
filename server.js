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

// http server
const port = PORT || 3000;
const server = httpServer.listen(port, function () {
    console.log(`listening at port: ${port}`);
});

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
    // patient_arg = ["name",new Date(), "test","test","test","test","test","test","test","test","test"];
    // que.createRecord(doc.patient, doc.createPatient, patient_arg);

    // console.log(`${que.register("teestee","teestee","p")}TEST QUERY`);

    // console.log(`${que.register_organization_child("org_Test","org_test","pass",undefined,"1","SPLICE")}TEST QUERY`);
})();

app.post("/register", function(req, res){
    const name = req.body.newUser.name;
    const email = req.body.newUser.email;
    const pass = req.body.newUser.password;

    que.register_patient(name, email, pass, res);
});

//post requests
app.post("/login", async function(req, res){
    const form_email = req.body.userData.email;
    const form_pass = req.body.userData.password;
    console.log("EMAIL: ",form_email,"- PASS: ",form_pass);
    console.log(res);
    //login check
    que.login(form_email, form_pass, res);
});


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
