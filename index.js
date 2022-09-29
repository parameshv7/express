const express = require("express");


const app = express();

app.get("/", (req, res) => {
  res.send("Express on Vercel");
});

app.listen(9000, () => {
  console.log("Running on port 9000.");
});

// Export the Express API
export default app;