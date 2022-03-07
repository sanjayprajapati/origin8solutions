const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const path = require("path");
const errorMiddleware = require("./middlewares/error");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

const user = require("./routes/userRoutes");
const switches = require("./routes/switchesRoutes");
const appartment = require("./routes/appartmentRoutes");

app.use("/api/v1", user);
app.use("/api/v1", switches);
app.use("/api/v1", appartment);

app.use(errorMiddleware);

module.exports = app;
