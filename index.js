const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://pranavkhadpe:Pranav123@cluster0.t1qyo6s.mongodb.net/blogs?retryWrites=true&w=majority",
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const postSchema = new mongoose.Schema({
  title: String,
  tags: [String],
  content: String,
  creationtime: String,
  lastupdated: String,
  publishingstatus: Number,
  quillcontent: Object,
});

const Post = mongoose.model("Post", postSchema);

app.post("/save", (req, res) => {
  const data = req.body;
  console.log(data);
  if (data.id == null) {
    const newPost = new Post({
      title: data.title,
      tags: data.tags,
      content: data.content,
      creationtime: data.date,
      lastupdated: data.updateDate,
      publishingstatus: data.published,
      quillcontent: data.quillcontent,
    });

    newPost
      .save()
      .then((savedPost) => {
        res.json({ message: "Post saved", articleId: savedPost._id });
      })
      .catch((err) => res.status(400).json("Error: " + err));
  } else {
    Post.findByIdAndUpdate(data.id, {
      title: data.title,
      tags: data.tags,
      content: data.content,
      lastupdated: data.updateDate,
      publishingstatus: data.published,
      quillcontent: data.quillcontent,
    })
      .then(() => res.json("Post updated"))
      .catch((err) => res.status(400).json("Error: " + err));
  }
});

app.get("/post/:id", (req, res) => {
  Post.findById(req.params.id)
    .then((post) => {
      if (post) {
        res.json(post);
      } else {
        res.status(404).json({ message: "Post not found" });
      }
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/allposts", (req, res) => {
  Post.find()
    .sort({ _id: -1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/allnotes", (req, res) => {
  Post.find({ tags: "note", publishingstatus: 1 })
    .sort({ _id: -1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

app.get("/allnows", (req, res) => {
  Post.find({ tags: "now", publishingstatus: 1 })
    .sort({ _id: -1 })
    .then((posts) => {
      res.json(posts);
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

app.delete("/post/:id", (req, res) => {
  Post.findByIdAndRemove(req.params.id)
    .then(() => {
      res.json({ message: "Post deleted successfully" });
    })
    .catch((err) => res.status(400).json("Error: " + err));
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
