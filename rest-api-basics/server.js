const EXPRESS = require("express");
const CORS = require("cors");

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(CORS());

APP.options("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Length, X-Requested-With");
    res.send(200);
});

APP.use(EXPRESS.json());
APP.use(EXPRESS.urlencoded({ extended: false}));
APP.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
APP.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});

APP.listen(PORT, () => console.log(`Listening on ${PORT}`));