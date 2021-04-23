const express = require('express');
const htmlroutes = require('./routes/htmlroutes.js');
const apiroutes = require('./routes/apiroutes.js')
//creating my port path
const PORT = process.env.PORT || 8080;
//creating the express app itself
const app = express();
//look in the public folder for public assets
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));


app.use("/api",apiroutes);
app.use("/",htmlroutes);


// Starting my server
app.listen(PORT, () => {
  console.log(`Server listening on: http://localhost:${PORT}`);
});
