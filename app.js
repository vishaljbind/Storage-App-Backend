const express = require("express");
const userRouter = require("./routes/user.routes");
const dotenv = require("dotenv");
const connectToDB = require("./config/db");
const cookieParser = require("cookie-parser");
const indexRouter = require("./routes/index.route");

dotenv.config();
connectToDB();

const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");

app.use("/", indexRouter);
app.use("/user", userRouter);

app.listen(8080, () => {
  console.log("server running on port 8080");
});
