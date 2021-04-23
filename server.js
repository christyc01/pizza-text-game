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

// app.use(express.json()) replaces app.use(bodyparser.json())
app.use(express.json());
// urlencoded grabs data from a form
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public")); // Put css/images in this folder
app.use("/scene", sceneRoutes); // Put this behind the other app.use's

// app.get("/", (req, res) => {
//   res.redirect("/scene/intro");
// });
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/login.html");
});

// app.get("/scene", (req, res) => {
//   res.redirect("/orderPizza");
// });

// app.get("/test", (req, res) => {
//   console.log("player name in test: ", playerName);
//   res.send(playerName);
// });

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

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`);
});

// module.exports.playerName = playerName;
