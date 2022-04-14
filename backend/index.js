const express = require("express");
const mongoose = require("mongoose");
const authRouter = require("./routers/authRouter");
const corsMiddleware = require("./middleware/corsMiddleware");

const PORT = process.env.PORT || 5000;

const app = express();

app.use(corsMiddleware);
app.use(express.json());
app.use("/api/auth", authRouter);

const start = async () => {
  try {
    await mongoose.connect(`mongodb://91.227.18.66:27017/lanamarinenko`);
    app.listen(PORT, () => console.log(`Server start on ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};

start();
