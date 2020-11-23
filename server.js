const createError = require('http-errors');
const http = require("http");
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const dotenv = require("dotenv").config();

const app = express();
const httpServer = http.Server(app);

// // view engine setup
// app.set('views', path.join(__dirname, 'src'));
// app.set('view engine', 'jsx');
// app.engine('jsx', require('express-react-views').createEngine());

const hostname = process.env.HOST;
const DB_name = process.env.DATABASE;
const PORT = process.env.PORT;

const mongoDB_user = process.env.ATLAS_NAME;
const mongoDB_pass = process.env.ATLAS_PASS;

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

//rendering pages
app.get("/test", function(req, res){
    res.send({ express: 'ITS ALIVE!' });
});



// import classes and mongoDB components
const org = require('./app/models/organizations');

// const splice = new org.orgs(0,'SPLICE', 'Club', 'test');

const pat = require('./app/models/patient');

// const splice = new pat.patient(0,0,0,0,"MEN",0,0,0,0,0,0);

//Connected server to MongoDB Atlas
const connectionString =  "mongodb://aliu:pass@ehr-test-shard-00-00.d1mre.mongodb.net:27017,ehr-test-shard-00-01.d1mre.mongodb.net:27017,ehr-test-shard-00-02.d1mre.mongodb.net:27017/<dbname>?ssl=true&replicaSet=atlas-c40bxx-shard-0&authSource=admin&retryWrites=true&w=majority";

const patient = mongoose.model('Patient', pat.schema_patient);
const organization = mongoose.model('Organization', org.schema_organization);

async function createPatient(){ 
    return new patient({
        name: '00',
        birth_date: new Date(),
        gender: "Male",
        address: "address",
        allergies: ["peanut", "bananer"],
        disabilities: ["N/A"],
        health_records: ["TEST"],
        visitation_records: ["TEST"],
        payment_records: ["TEST"],
        appointments: ["TEST"],
        healthcare_plans: ["TEST"]
    }).save()
}

async function createOrganization(){
    return new organization({
        name: "SPLICE",
        type: "Club",
        info: "TEst"
    }).save()
};

;(async () =>{
    
    const connector = mongoose.connect(connectionString,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true
    });

    //test queries
    let user = await connector.then(async() => {
        return patient.findOne({name: "00"}, "name allergies");
    });

    let org = await connector.then(async() => {
        return organization.findOne({name: "SPLICE"}, "name type");
    });

    if (!user){
        console.log("user created")
        user = await createPatient();
    }
    else{
        console.log("user already exists");
    }

    if (!org){
        console.log("org created")
        org = await createOrganization();
    }
    else{
        console.log("org already exists");
    }

    console.log(`NEW USER: ${user}`);
    console.log(`NEW ORG: ${org}`);
})();

patient.find(function(err, Patient){
    if (err) return console.error(err);
    console.log(Patient);
})





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
