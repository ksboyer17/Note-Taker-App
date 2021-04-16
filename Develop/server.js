const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/htmlroutes.js')
//creating my port path
const PORT = process.env.PORT || 8080;
//creating the express app itself
const app = express();
//look in the public folder for public assets

app.use(express.static("public"))

//passing in routes from the routes folder
require("./routes/apiroutes")(app);
require("./routes/htmlroutes")(app);
//sets up express ap to handle parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Starting my server
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
