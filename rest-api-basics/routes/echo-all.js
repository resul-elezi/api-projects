const EXPRESS  = require("express");
const ROUTER = EXPRESS.Router();

ROUTER.route("/")
    .get(echoAll)
    .post(echoAll)
    .put(echoAll)

function echoAll(req, res) {
    const METHOD = req.method;
    const DATA = METHOD === "GET" ? req.query : req.body;
    
    res.format({
        "text/plain": () => {
            res.send(DATA);
        },
        "text/html": () => {
            let html = "<ul>";
            for (key in DATA) {

                html += `<li>${key}: ${DATA[key]}</li>`;
            }
            html += `</ul>`;
            res.send(html);
        },
        "application/json": () => {
            res.json(DATA);
        },
        "default": () => {
            res.status(406).send("Not Acceptable");
        }
    });
}

module.exports = ROUTER;