const express = require("express");
const logger = require("morgan");
const path = require("path");

const app = express();
const indexRouter = require("./routes/indexRouter");
const gameRouter = require("./routes/gameRouter");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", ("ejs"));

app.use(logger("dev"));
app.use(express.json());

app.use("/", indexRouter);
app.use("/api/game", gameRouter);

// app.listen(3000, () => {
//     console.log("Server started on port 3000")
// });

module.exports = app;