const express = require("express");
//import todo from "./routes/todor.js"

const todo = require("./routes/todor.js");
const app = express();


app.use("/", todo);
app.get("/", (req, res) => {
  res.send("my project on Vercel");
});


app.listen(1000, () => {
  console.log("Running on port 1000.");
});

// Export the Express API
module.exports = app;


