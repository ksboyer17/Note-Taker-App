const util = require('util');
const fs =require('fs');
// const uid = require('uuid/v1');
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

class Store {
    read(){
        return readFileAsync("db/db.json", "UTF8")
    }
    write(param){
       return writeFileAsync("db/db.json", JSON.stringify(param))
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
        const newNote = {title, text, id: 5}    
        return this.getnotes()
        .then((notes)=>[...notes,newNote])
        .then((theNote)=> this.write(theNote))
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