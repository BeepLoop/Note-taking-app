const express = require("express");

const app = express();

const notes = [];

app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { notes });
});

app.post("/", (req, res) => {
  const { title, date, content } = req.body;
  const id = notes.length + 1;
  notes.push({ id, title, date, content });

  res.redirect("/");
});

app.post("/delete/:id", (req, res) => {
  const id = req.params.id;

  const index = () => {
    for (const i in notes) {
      if (notes[i].id == id) return i;
    }
  };

  const i = index();
  notes.splice(i, 1);
  res.redirect("/");
});

//Listen to requests
const PORT = 8080;
app.listen(PORT, () => console.log(`Listening to port ${PORT}`));
