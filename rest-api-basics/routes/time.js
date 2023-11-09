const EXPRESS  = require("express");
const ROUTER = EXPRESS.Router();

ROUTER.get("/", (req, res, next) => {
    req.time = new Date().toString();
    next();
}, (req, res) => {
    res.json({ "time": req.time });
});

module.exports = ROUTER; 