const fs = require('fs');
const router = require('express').Router();
const store = require('../db/store');


module.exports = function(app) {

}



//returning user notes
router.get("/notes", (req, res)=>{
 store.getnotes()
 .then((notes)=> {
return res.json(notes);
    })
    .catch((error)=>{
    console.log(error) 
    res.status(500).json(error)
    })
});

//adding user notes with the post method
//req.body is the object sent from the front end
router.post("/notes", (req,res)=>{
    store.addnotes(req.body)
    .then((notes)=> {
        return res.json(notes);
            })
            .catch((error)=> res.status(500).json(error))
});

router.delete("/notes/:id", (req,res)=>{
    store.removenotes(req.param.id)
    .then(()=> res.json({ok: true}))
    .catch((error)=> res.status(500).json(error))
});

module.exports = router;