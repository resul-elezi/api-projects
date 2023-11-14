const EXPRESS  = require("express");
const ROUTER = EXPRESS.Router();

ROUTER.get("/", (req, res) => {
    const DATA = "Hello JSON";
    res.json({ "message": DATA });
});

module.exports = ROUTER;