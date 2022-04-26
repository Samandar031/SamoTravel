const express = require("express");
const fs = require("fs");
const app = express();

const PORT = 8002;
const pack = fs.readFileSync("./package-lock.json", "utf-8");
app.get("/", (req, res) => {
  res.send(pack);
  console.log("sizda hammasi ishladi");
});

app.listen(PORT, "127.0.0.1");
