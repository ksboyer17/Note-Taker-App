const util = require('util');
const fs =require('fs');
const uuidv1 = require('uuid/v1');
const { param } = require('../routes/htmlroutes');
const readfile = util.promisify(fs.readFile);
const writefile = util.promisify(fs.writeFile);

class Store {
    read(){
        return readfile("./db.json", "UTF8")
    }
    write(param){
       return writefile("./db.json", JSON.stringify(param))
    }
    getnotes(){
        return this.read().then( (notes)=>{
            let parsNotes
            try{
                parsNotes = [].concat(JSON.parse(notes))
            }
            catch(error) {
                parsNotes = []
            }
            return parsNotes;
        } )
    }
    addnotes(param){
        const {title,text} = param
        const newNote = {title, text, id: uuidv1()}    
        return this.getnotes()
        .then((notes)=>[...notes,newNote])
        .then((addNote)=> this.write(addNote))
        .then(()=>newNote)
    }
    removenotes (param){
        this.getnotes()
        .then((array)=> array.filter((note)=>
            note.id !== param
        )) 
        .then((addNote)=> this.write(addNote))   
    }
}

module.exports = new Store();