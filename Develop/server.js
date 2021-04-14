const express = require('express');
const fs = require('fs');
const path = require('path');
const routes = require('./routes/routes.js')
//creating my port path
const PORT = process.env.PORT || 8080;
//creating the express app itself
const app = express();
//look in the public folder for public assets
app.use(express.static("public"))

//passing in routes from the router folder
app.use(routes);

//Create api call for notes and figure out how to send the note back to the browser






// Starting my server
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
