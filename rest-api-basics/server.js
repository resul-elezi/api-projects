const EXPRESS = require("express");
const CORS = require("cors");

const APP = EXPRESS();
const PORT = process.env.PORT || 3000;

APP.listen(PORT, () => console.log(`Listening on ${PORT}`));