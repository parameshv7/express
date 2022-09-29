
import todo from "./routes/todor.js"
const express = require("express");


const app = express();
app.use("/", todo);
app.get("/", (req, res) => {
  res.send("sswwwww on Vercel");
});

app.listen(9000, () => {
  console.log("Running on port 9000.");
});

// Export the Express API
export default app;