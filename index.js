

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


const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("AaaaaaaaaaPppppppIiiiiS");
});

app.listen(5000, () => {
  console.log("Running on port 5000.");
});

// Export the Express API
export default app;