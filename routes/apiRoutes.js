const router = require("express").Router();
const saveData = require('../db/saveData.js');

router.get("/notes", function (req, res) {
    saveData
    .retrieveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", function(req, res) {
    saveData
    .saveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

module.exports = router();