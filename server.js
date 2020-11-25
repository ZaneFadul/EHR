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

<<<<<<< HEAD
//rendering pages
app.get("/test", function(req, res){
    res.send({ express: 'ITS ALIVE!' });
});


=======
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
>>>>>>> 7e9901aa1269979a0fc683d0a58bc5d0a247aa07

// import classes and mongoDB components
const org = require('./app/models/organizations');

// const splice = new org.orgs(0,'SPLICE', 'Club', 'test');

const pat = require('./app/models/patient');
const presc = require('./app/models/prescription');
const med = require('./app/models/medication');

// const splice = new pat.patient(0,0,0,0,"MEN",0,0,0,0,0,0);

const user = require('./app/models/user');

//Connected server to MongoDB Atlas
const connectionString =  `mongodb://${mongoDB_user}:${mongoDB_pass}@ehr-test-shard-00-00.d1mre.mongodb.net:27017,ehr-test-shard-00-01.d1mre.mongodb.net:27017,ehr-test-shard-00-02.d1mre.mongodb.net:27017/${DB_name}?ssl=true&replicaSet=atlas-c40bxx-shard-0&authSource=admin&retryWrites=true&w=majority`;

const patient = mongoose.model('Patient', pat.schema_patient);
const organization = mongoose.model('Organization', org.schema_organization);

const ehr_user = mongoose.model('User', user.schema_user);

async function createUser(){
    return new ehr_user({
        type: "patient",
        first_name: "TEST",
        last_name: NULL,
        username: "notliu",
        password: "pass",
        email: "email@meial",
        userID: "00"
    }).save()
};

const prescription = mongoose.model('Prescription', presc.schema_prescription);
const medication = mongoose.model("Medication", med.schema_medication);

const test_med = new med.medication("name", "desc", "dosage", ["side effects"]);


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

async function createPrescription(){
    return new prescription({
        medications: [test_med],
        date: new Date(),
        description: "TEST MED PRESCRIPTION",
        start_date: new Date(),
        end_date: new Date()
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
    let patient_query = await connector.then(async() => {
        return patient.findOne({name: "00"}, "name allergies");
    });

    let org_query = await connector.then(async() => {
        return organization.findOne({name: "SPLICE"}, "name type");
    });


    let user_query = await connector.then(async() => {
        return organization.findOne({name: "SPLICE"}, "name type");
    });

    let prescription_query = await connector.then(async() => {
        return prescription.findOne({name: "SPLICE"}, "name type");
    });

    if (!patient_query){
        console.log("patient created")
        user = await createPatient();
    }
    else{
        console.log("patient already exists");
    }

    if (!org_query){
        console.log("org created")
        org = await createOrganization();
    }
    else{
        console.log("org already exists");
    }

    if (!user_query){
        console.log("user created")
        org = await createUser();
    }
    else{
        console.log("user already exists");
    }

    if (!prescription_query){
        console.log("prescription created")
        prescription_query = await createPrescription();
    }
    else{
        console.log("prescription already exists");
    }

    console.log(`NEW USER: ${user}`);
    console.log(`NEW ORG: ${org}`);
    console.log(`NEW PRESCRIPTION QUERY: ${prescription_query}`);

})();

patient.find(function(err, Patient){
    if (err) return console.error(err);
    console.log(Patient);
})



<<<<<<< HEAD
=======
//const splice = new pat.patient(0,0,0,0,"MEN",0,0,0,0,0,0);
//console.log("TEST", splice.all);
>>>>>>> 7e9901aa1269979a0fc683d0a58bc5d0a247aa07


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
