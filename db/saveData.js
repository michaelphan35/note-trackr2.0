const { json } = require('express/lib/response');
const fs = require("fs");
const util = require("util");
const asyncReadFile = util.promisify(fs.readFile);
class Notes {
    async retriveNotes() {
        const parseData = []
        asyncReadFile ("db/db.json", "utf-8", (err, data) =>{
            if (err) {
                console.error(err);
                return;
            }

            return JSON.parse(data);
        })
    }
    async saveNotes() {
        console.log("success");
    }
}

const newClass = new Notes;
module.exports = new Notes;