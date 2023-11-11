const EXPRESS = require("express");
const ROUTER = EXPRESS.Router();

ROUTER.route("/")
    .get(nameReply)
    .post(nameReply)

function nameReply(req, res) {
    const METHOD = req.METHOD;
    const FIRST_NAME = METHOD === "GET" ? req.query.first : req.body.first;
    const LAST_NAME = METHOD === "GET" ? req.query.last : req.body.last;

    res.format({
        "text/plain": () => {
            res.send(`name: ${FIRST_NAME} ${LAST_NAME}`)
        },
        "text/html": () => {
            let html = "<ul>";
            html += `<li>name: ${FIRST_NAME} ${LAST_NAME}</li>`;
            html += `</ul>`;
            res.send(html);
        },
        "application/json": () => {
            res.json({"name": `${FIRST_NAME} ${LAST_NAME}`});
        },
        "default": () => {
            res.status(406).send("Not Acceptable");
        }
    });
}
module.exports = ROUTER;