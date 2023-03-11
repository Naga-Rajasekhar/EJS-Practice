const express = require("express");
const app = express();

//View engine Middleware(to render the data)
app.set("view engine", "ejs");

//middleware(to use json inside express, we need to use express)

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

//My home Route

app.get("/", (req, res) => {
  res.send("Hello Express");
});

//My get Route

app.get("/myget", (req, res) => {
  console.log(req.query);
  res.send(req.query);
});

//My post route

app.post("/mypost", (req, res) => {
  console.log(req.body);
  console.log(req.files);
});

app.get("/getform", (req, res) => {
  res.render("getform");
});

//snippet for rendering page for post

app.get("/postform", (req, res) => {
  res.render("postform");
});

app.listen(4000, () => {
  console.log(`Server is running at 4000`);
});
