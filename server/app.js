if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}
const express = require("express");
const cors = require("cors");
const handleErrors = require("./middlewares/handleErrors");
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(require("./routes/index"));
app.use(handleErrors)




module.exports = app;