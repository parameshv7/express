

// //import bodyParser from "body-parser";
// //import cors from "cors";
// //import todo from "./routes/todor.js"
// const express = require("express");


// const app = express();
// //app.use(bodyParser.json());
// //app.use(cors());
// //app.use("/", todo);



// app.get("/", (req, res) => {
//   res.send("sscxxxwwwww on Vercel");
// });

// app.listen(9000, () => {
//   console.log("Running on port 9000.");
// });

// // Export the Express API
// export default app;


//const express = require("express");


import todo from "./routes/todor.js"
import express from "express";

const app = express();

app.use("/", todo);
app.get("/", (req, res) => {
  res.send("ponniyin selvan");
});

app.listen(7000, () => {
  console.log("Running on port 7000.");
});

// Export the Express API
export default app;