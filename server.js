require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// serve frontend
app.use(express.static(path.join(__dirname, "public")));

const PORT = 2468;

mongoose
  .connect("mongodb://localhost:27017/myFirstDB")
  .then(() => console.log("DB connected"))
  .catch((err) => console.error(err.message));

const userRouter = require("./routes/userRoute");
app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});
