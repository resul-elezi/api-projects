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
APP.use(EXPRESS.urlencoded({ extended: false }));
APP.use((req, res, next) => {
    console.log(`${req.method} ${req.path} - ${req.ip}`);
    next();
});
APP.use(EXPRESS.static("public"));
APP.use(EXPRESS.static("css"));

const TIME_ROUTES = require("./routes/time");
const NAME_ROUTES = require("./routes/name");
const JSON_ROUTES = require("./routes/json");
const ECHO_ALL_ROUTES = require("./routes/echo-all");

APP.use("/routes/time", TIME_ROUTES);
APP.use("/routes/name", NAME_ROUTES);
APP.use("/routes/json", JSON_ROUTES);
APP.use("/routes/echo-all", ECHO_ALL_ROUTES);

APP.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
});
APP.get("/form", (req, res) => {
    res.sendFile(__dirname + "/views/form.html");
});

APP.get("/:word/echo", (req, res) => {
    res.json({ "echo": req.params.word });
});

APP.all("*", (req, res) => {
    res.send("Invalid route");
});

APP.listen(PORT, () => console.log(`Listening on ${PORT}`));