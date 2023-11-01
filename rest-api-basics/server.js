const EXPRESS = require("express");
const CORS = require("cors");

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.use(CORS());

APP.options("*", (req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Authorization, Content-Length, X-Requested-With");
});

APP.listen(PORT, () => console.log(`Listening on ${PORT}`));