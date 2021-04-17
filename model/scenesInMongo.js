// let scenes = {};

const db = require("../db");

// let options = [];
// options was defined in following function and with an if statement (!options) - does it matter?

async function createScene(name, description, options) {
  if (!options) {
    let options = [];
  }
  console.log("createScene with id of:", name);
  // scenes[id] = { id, description, options };
  return db.getCollection("scenes").then((scenes) => {
    return scenes
      .insertOne({
        name,
        description,
        options,
      })
      .then((insertResult) => {
        // console.log("createScene scenes[id]:", scenes[name]);
        console.log("Inserted a scene!");
      });
  });
}

// DON'T NEED ASYNC HERE? Just if connecting to DB?
// async function findSceneByName(sceneName) {
//   // function findSceneById(id) {
//   // let scene = scenes[name];
//   console.log("findSceneByName-sceneName:", sceneName);
//   // console.log("findSceneByName-scene:", scene);
//   // if (!scene) {
//   //   throw new Error(`Scene ${sceneName} doesn't exist!`);
//   // }
//   // return scene;
//   return db.getCollection("scenes").then((scenes) => {
//     return scenes.findOne({ name: sceneName });
//   });
// }

async function findSceneByName(sceneName) {
  return db.getCollection("scenes").then((scenes) => {
    return scenes.findOne({ name: sceneName });
  });
}

// module.exports = { createScene, findSceneById: findSceneByName };
module.exports = { createScene, findSceneByName };
