const fs = require('fs');
const notesData = require("../db/db.json");

module.exports = function(app) {

}
//returning user notes
app.get("/api/notes", function(req, res){
    res.json(notesData);
});

//adding user notes with the post method

app.post("/api/notes", function(req,res){
    
})

//     // Empty out the arrays of data
// app.post('/api/clear', (req, res) => {    

//     res.json({ ok: true });
//   });
// };