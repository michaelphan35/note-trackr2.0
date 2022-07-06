const fs = require("fs");

/*module.exports = Notes => {
    fs.readFile(".db/db.json", "utf-8", (err,data) => {
        if (err) throw err;

        const note = JSON.parse(data);

        function saveData() { 
            fs.writeFile(".db/db.json", JSON.stringify(note), err => {
                if (err) throw err;
                return true;
            })
        }

    })
}*/

/* class Notes {
    getNotes() {
        fs.readFile ("./db/db.json", "utf-8", (err, data) => {
            if (err) throw error;
             });
             let note = JSON.parse(data);
    saveNotes() 
        fs.writeFile ("./db/db.json", JSON.stringify(note), err => {
            return true
        }
        
        )}
    }*/

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
