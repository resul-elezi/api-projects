const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

ROUTER.route("/")
    .get(nameReply)
    .post(nameReply)

function nameReply(req, res) {
    const METHOD = req.METHOD;
    const FIRST_NAME = METHOD === "GET" ? req.query.first : req.body.first;
    const LAST_NAME = METHOD === "GET" ? req.query.last : req.body.last;
}