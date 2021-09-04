
/*
Database Server Init
 */
const path = require('path');
var ObjectId = require('mongodb').ObjectId;
var MongoClient = require('mongodb').MongoClient;
var localdatabase = {settings: {
    country: "Nigeria",
        language: "English"
    }};

MongoClient.connect('mongodb+srv://healthtracker:AhzwGrC3ntKFKEb1@cluster0.ag96i.' +
    'mongodb.net/healthtracker?retryWrites=true&w=majority', async function (err, client) {
    if (err) return console.error(err);
    console.log('Connected to Database');
    const db = await client.db('healthtracker');

    /*
    Tables Init
     */
    const users = await db.collection('users');
    const physiciansD = await db.collection('users');
    const healthIssues = await db.collection('healthissues');
    const healthIssuesP = await db.collection('healthissues');
    const healthIssuesM = await db.collection('healthissues');

    /*
    Modules Init
     */


    const express = require('express');
    const app = express();
    const port = 3000;



    var cors = require('cors');
    app.use(cors());
    app.use(express.static('www'));
    app.use(express.json());


    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, 'www/index.html'));
    });

    app.post('/login', function(req, res){
        console.log(req.body);
        let user =users.find({username: req.body.username.toLowerCase(), password: req.body.password});
        let healthIssues2 = healthIssues.find({patient:req.body.username.toLowerCase()});
        let healthIssuesP2 = healthIssuesP.find({level:0});
        let healthIssuesM2 = healthIssuesM.find({physician:req.body.username.toLowerCase()});
        let physicians = physiciansD.find({role:"Physician"});
        let dataR ={};
        user.toArray().then(
            count=>{
                if(count.length > 0){
                    let user= count[0];
                    delete user['_id'];
                    delete user['password'];
                    delete user['type'];
                    dataR.user = user;
                    dataR.status =200;

                    healthIssues2.toArray().then(
                        count=>{
                            dataR.healthIssues = count;
                            healthIssuesP2.toArray().then(
                                count=>{
                                    dataR.healthIssuesP = count;
                                    healthIssuesM2.toArray().then(
                                        count=>{
                                            dataR.healthIssuesM = count;
                                            physicians.toArray().then(
                                                count=>{
                                                    stripped = [];
                                                    count.forEach((item)=>{
                                                        delete item['_id'];
                                                        delete item['password'];
                                                        delete item['type'];
                                                        stripped.push(item)
                                                    });
                                                    dataR.physicians = stripped;
                                                    res.jsonp(dataR);
                                                }
                                            ).catch();
                                        }
                                    ).catch();
                                }
                            ).catch();
                        }
                    ).catch();
                }
                else{
                    res.jsonp({status:500});
                    return;
                }
            }
        ).catch();

    });
    app.post('/refreshDB', function(req, res){
        let user =users.find({username: req.body.username.toLowerCase()});
        let healthIssues2 = healthIssues.find({patient:req.body.username.toLowerCase()});
        let healthIssuesP2 = healthIssuesP.find({level:0});
        let healthIssuesM2 = healthIssuesM.find({physician:req.body.username.toLowerCase()});
        let physicians = physiciansD.find({role:"Physician"});
        let dataR ={};
        user.toArray().then(
            count=>{
                if(count.length > 0){
                    let user= count[0];
                    delete user['_id'];
                    delete user['password'];
                    delete user['type'];
                    dataR.user = user;
                    dataR.status =200;

                    healthIssues2.toArray().then(
                        count=>{
                            dataR.healthIssues = count;
                            healthIssuesP2.toArray().then(
                                count=>{
                                    dataR.healthIssuesP = count;
                                    healthIssuesM2.toArray().then(
                                        count=>{
                                            dataR.healthIssuesM = count;
                                            physicians.toArray().then(
                                                count=>{
                                                    stripped = [];
                                                    count.forEach((item)=>{
                                                        delete item['_id'];
                                                        delete item['password'];
                                                        delete item['type'];
                                                        stripped.push(item)
                                                    });
                                                    dataR.physicians = stripped;
                                                    res.jsonp(dataR);
                                                }
                                            ).catch();
                                        }
                                    ).catch();
                                }
                            ).catch();
                        }
                    ).catch();
                }
                else{
                    res.jsonp({status:500});
                    return;
                }
            }
        ).catch();

    });
    await app.post('/register', (req, res) => {
        console.log(req.body);
        switch (req.body.type) {
            case "checkEmail":{
                users.find({email: req.body.email.toLowerCase()}).count().then(
                    count=>{
                        console.log(count);
                        if(count > 0)
                            res.jsonp({status:500});
                        else{
                            res.jsonp({status:200});
                        }
                    }
                ).catch();
                break;
            }
            case "checkUsername":{
                users.find({username: req.body.username.toLowerCase()}).count().then(
                    count=>{
                        if(count > 0)
                            res.jsonp({status:500});
                        else{
                            res.jsonp({status:200});
                        }
                    }
                ).catch();
                break;
            }
            case "register":{
                users.find({email: req.body.email.toLowerCase()}).count().then(
                    count=>{
                        if(count > 0)
                            res.jsonp({status:500});
                        else{
                            users.find({username: req.body.username.toLowerCase()}).count().then(
                                count=>{
                                    if(count > 0)
                                        res.jsonp({status:500});
                                    else{
                                        req.body.username = req.body.username.toLowerCase();
                                        req.body.email = req.body.email.toLowerCase();
                                        users.insertOne(req.body);
                                        res.jsonp({status:200});
                                    }
                                }
                            ).catch();
                        }
                    }
                ).catch();
                break;
            }

        }
    });

    app.post('/createHealthIssue', (req, res) => {
        req.body.patient = req.body.patient.toLowerCase();
        req.body.physician = "none";
        req.body.ailment ="Awaiting Diagnosis";
        req.body.prescriptions =[];
        req.body.feedbacks =[];
        req.body.level = 0;
        healthIssues.insertOne(req.body);
        res.jsonp({status:200});
    });


    app.post('/getProfile', (req, res) => {
        res.send('Hello World!')
    });
    app.post('/getData', (req, res) => {
        res.send('Hello World!')
    });
    app.post('/addPrescription', (req, res) => {
        let issue ={};
        healthIssues.find({"_id": new ObjectId(req.body.id)}).toArray().then(
            count=>{
                issue = count[0];
                issue.prescriptions = issue.prescriptions.concat(req.body.prescriptions);
                const options = { upsert: true };
                if (issue.physician === "none"){

                    console.log("jfh");
                    issue.ailment = req.body.ailment;
                    issue.physician = req.body.username;
                    issue.level = 1;
                    const updateDoc = {
                        $set: issue,
                    };
                    const result = healthIssues.updateOne({"_id": new ObjectId(req.body.id)}, updateDoc, options);

                }
                res.jsonp({status:200})

            }
        ).catch();

    });
    app.post('/addFeedback', (req, res) => {
        let issue ={};
        healthIssues.find({"_id": new ObjectId(req.body.id)}).toArray().then(
            count=>{
                issue = count[0];
            issue = count[0];

                issue.feedbacks = issue.feedbacks.concat(req.body.feedbacks);
                const options = { upsert: true };

                const updateDoc = {
                    $set: issue,
                };
                const result = healthIssues.updateOne({"_id": new ObjectId(req.body.id)}, updateDoc, options);
                res.jsonp({status:200})

            }
        ).catch();
    });
    app.post('/certifyIssue', (req, res) => {
        let issue ={};
        healthIssues.find({"_id": new ObjectId(req.body.id)}).toArray().then(
            count=>{
                issue = count[0];
                const options = { upsert: true };
                issue.level = 2;
                const updateDoc = {
                    $set: issue,
                };
                const result = healthIssues.updateOne({"_id": new ObjectId(req.body.id)}, updateDoc, options);
                res.jsonp({status:200})

            }
        ).catch();

    });

    app.listen(port, () => {
        console.log(`Example app listening at http://localhost:${port}`)
    });
});

