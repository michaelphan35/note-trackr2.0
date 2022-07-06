const router = require("express").Router();
const saveData = require('../db/dataAggregate.js');

router.get("/notes", function (req, res) {
    saveData
    .getNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

router.post("/notes", function(req, res) {
    saveData
    .saveNotes()
    .then(notes => res.json(notes))
    .catch(err => res.status(500).json(err));
});

module.exports = router;