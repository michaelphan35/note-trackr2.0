const fs = require("fs");
class Notes {
    getNotes() {
        fs.readFile ("./db/db.json", "utf-8", (err, data) => {
            if (err) throw error;
            let note = JSON.parse(data);
            function saveNotes() {
                fs.writeFile ("./db/db.json", JSON.stringify(note), err => {
                    return true
                })
            }
        })
    };
        
    }
/* class Notes {
    async getNotes() {
        const data = [];
        fs.readFile ("./db/db.json", "utf-8", (err, data) =>{

            return JSON.parse(data);
        })
    }
    async saveNotes() {
    }
}*/

module.exports = new Notes;