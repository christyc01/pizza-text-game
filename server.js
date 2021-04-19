const sceneRoutes = require("./routes/scene");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

// MONGO
const MongoClient = require("mongodb").MongoClient;
const dbUrl = "mongodb://localhost:27017";
const databaseName = "pizzaGame";
const db = require("./db");

let connectMongoClient = MongoClient.connect(dbUrl, {
  useUnifiedTopology: true,
});
let getDb = connectMongoClient.then((client) => {
  return client.db(databaseName);
});

function getCollection(name) {
  return getDb.then((db) => {
    return db.collection(name);
  });
}

function close() {
  return connectMongoClient.then((client) => {
    return client.close();
  });
}

app.use("/scene", sceneRoutes);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// // ***Add something to the database (MongoDB) - works but not sure how to use this in my game
// db.getCollection("scenes")
//   .then((scenes) => {
//     console.log("Inserting a document!");
//     return scenes.insertOne({
//       name: "TESTNAME2 from db.getCollection('scenes')",
//       description: "Test",
//       options: ["a", "b"],
//     });
//   })
//   .then((insertResult) => {
//     console.log("Document has been inserted");
//     console.log(insertResult);
//     db.close();
//   });
// ***End of Add something to the database (MongoDB)

app.get("/", (req, res) => {
  res.redirect("/scene/intro");
});

// // ***Experimenting with PUT
// app.put("/:scenes", (req, res) => {
//   console.log("TEST??");
//   scenes.description = "Bob?";
//   res.send(scenes);
// });

// app.put("/scene/:id", function (req, res, next) {
//   scenes
//     .findByIdAndUpdate({ _id: req.params.id }, req.body)
//     .then(function (scene) {
//       res.send({ scene });
//     });
// });
// // ***End of Experimenting with PUT

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`);
});

module.exports = {
  getDb,
  getCollection,
  close,
};
