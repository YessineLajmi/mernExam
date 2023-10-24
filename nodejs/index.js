const express = require("express");
const connect = require("./config/database");
const cors = require("cors");
const router = require("./router/orderouter");
const app = express();

connect();
app.use(cors());
app.use(express.json());
app.use("/order", router);

app.listen(8000, () => {
  console.log("connected to port 8000");
});
