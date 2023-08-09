const express = require("express");
const app = express();
const port = 8000;

app.get("/", (req, res) => {
  // res.send("Hello World! dari express");
  res.sendFile("./index.html", { root: __dirname });
});
app.get("/about", (req, res) => {
  // res.send("Hello World! dari about");
  res.sendFile("./about.html", { root: __dirname });
});
app.get("/project", (req, res) => {
  // res.send("Hello World! dari project");
  res.sendFile("./project.html", { root: __dirname });
});

app.use;

app.listen(port, () => {
  console.log(`Server ready on port ${port}`);
});
