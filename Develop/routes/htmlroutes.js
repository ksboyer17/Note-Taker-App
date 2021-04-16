//Bringing in an express routers
const router = require('express').Router()
const path = require('path');
const fs = require('fs');

//creating routes and sending the user to the correct page with the relative path to the file
router.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname,"../public/notes.html"))
  });
  

router.get('/api/notes', function (req, res) {
  res.sendFile(path.join(__dirname,'../db/db.json'))
  });
  
router.post('/api/notes', function (req, res) {
  res.sendFile(path.join(__dirname,""))
    res.json()
  });

  router.get('*', function (req, res) {
    res.sendFile(path.join(__dirname,"../public/index.html"))
  });
  
 //exporting information with the exports variable
  module.exports = router;