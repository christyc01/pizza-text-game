// require("./model/story"); //not needed in Mongo version because assuming the info is already there
const sceneRoutes = require("./routes/scene");

const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
// MONGO
const MongoClient = require("mongodb").MongoClient;
const { viewWallet } = require("./model/scenesInMongo");
const { response } = require("express");
const dbUrl = "mongodb://localhost:27017";
const databaseName = "c6Mongo";

let connectMongoClient = MongoClient.connect(dbUrl, {
  useUnifiedTopology: true,
});
// // From online...
// MongoClient.connect(url, (error, client) => {
//   const db = client.db;
// //

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

// const db = require("./db");

// db.getCollection("people")
//   .then((people) => {
//     console.log("Inserting a document!");
//     return people.insertOne({
//       firstName: "Anthony",
//       lastName: "Enerson",
//     });
//   })
//   .then((insertResult) => {
//     console.log("Document has been inserted");
//     console.log(insertResult);
//     db.close();
//   });

// THINGS TO PICK UP
// const items = [];

app.use("/scene", sceneRoutes);
app.use(express.json());
// POST
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.redirect("/scene/intro");
});

app.get("/organicStore", (req, res) => {
  shoppingCart = [];
  console.log("Shopping cart is empty?", shoppingCart);
  shoppingCart.push("grocery item");
  console.log("Item added to shopping cart?", shoppingCart);
  res.render("Item added to shopping cart");
});

// POST
app.post("/", function (request, response) {
  response.send(request.body);
});
// //////////////
app.set("view engine", "pug");
app.set("views", "./views");

app.get("/", (req, res) => {
  res.render("index", { title: "Testing pug title", message: "Pug message" });
});
// ///////////////
// TESTING (from Osric's code):
// app.get("/scene/:items", (req, res) => {
//   res.send("TEST:" + req.params.items);
// });
// app.post("/scene/:sceneId/pick", async (req, res) => {
//   console.log(req.body);
//   let item1 = req.body.item1;
//   let item2 = req.body.item1;
//   let inventory = await logic.scene_1(item1, item2);
//   res.send("Added to inventory" + item1 + " & " + item2);
// });

// // From online
// app.get("/p/:tagId", function (req, res) {
//   res.send("tagId is set to " + req.params.tagId);
// });

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}...`);
});

module.exports = {
  getDb,
  getCollection,
  close,
};
