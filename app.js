// Libraries
const express = require('express');          // Express used for API
const fs = require("fs");                    // Read/Write File Modules
const bodyParser = require('body-parser');   // Read Body of request

// Config
const PORT = 3000;                           // Listen on Port 3000
const DATA_PATH = __dirname + "/database/";  // Store data path

// Define app variable
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.raw());

// ALLOW ACCESS
app.use((req, res, next) => {
   res.setHeader('Access-Control-Allow-Origin', '*')
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   )
   next()
})


//--------------------------------------------------------
// USERS
//--------------------------------------------------------
let arcsD = require(DATA_PATH + "/archive.json");    // Initialize Users
let arcs =  JSON.parse(JSON.stringify(arcsD));       // Stringify Users

// SHOW UI VIA PORTS - Landing Page
app.get('/', (req, res) => {
   res.redirect('/landing')
})

app.get('/landing', (req, res) => {
   res.sendFile(__dirname + '/landing.html')
})

// SHOW UI VIA PORTS - Archive Get
app.get('/ArcGet/indexag.html', (req, res) => {
   res.sendFile(__dirname + '/ArchiveGet/indexag.html')
})

app.get('/ArcGet/indexag.js', (req, res) => {
   res.sendFile(__dirname + '/ArchiveGet/indexag.js')
})

// SHOW UI VIA PORTS - Archive Put
app.get('/ArcPut/indexap.html', (req, res) => {
   res.sendFile(__dirname + "/ArchivePut/indexap.html")
})

app.get('ArcPut/indexap.js', (req, res) => {
   res.sendFile(__dirname + '/ArchivePut/indexap.js')
})

// USERS - List all Users
app.get('/listAll', (req, res) => {
   res.send(arcs);
})

// USERS - Get user by Id
app.get('/:username', (req, res) => {
   let cusername = cusername.find(x => x.arcC.toString() === req.params.arcC);
   res.send(arc);
})

// USERS - Add a user
app.post('/add', (req, res) => {
   let arc = {
      arcC : req.body.arcC,
      fLink : req.body.fLink,
   }
   arcs.push(arc);

   fs.writeFile(DATA_PATH + "archive.json", JSON.stringify(arcs, null, 2), function(err) {
      if (err) {
         return console.error(err);
      }
   });

   res.send(arc);
})

// USERS - Delete a user
app.delete('/:arcC', function (req, res) {
   let index = users.findIndex(x => x.arcC.toString() === req.params.arcC);
   users.splice(index, 1);
   res.send(arcs);
})

// Start Server 
var server = app.listen(PORT, function () {
   console.log("Example app listening at http://localhost:%s", PORT)
})