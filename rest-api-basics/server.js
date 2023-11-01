const EXPRESS = require("express");
const CORS = require("cors");

const APP = express();
const PORT = process.env.PORT || 3000;

APP.listen(PORT, () => console.log(`Listening on ${PORT}`));