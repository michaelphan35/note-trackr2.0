const path = require("path");
const router = require("express").Router();

router.get("/notes", function (res, req) {
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

router.get("/", function (res, req) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

router.post("*", function (res, req) {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router();