const db = require("../db");

async function createScene(name, description, options) {
  if (!options) {
    let options = [];
  }
  console.log("createScene with id of:", name);
  return db.getCollection("scenes").then((scenes) => {
    return scenes
      .insertOne({
        name,
        description,
        options,
      })
      .then((insertResult) => {
        console.log("Inserted a scene!");
      });
  });
}

async function findSceneByName(sceneName) {
  return db.getCollection("scenes").then((scenes) => {
    return scenes.findOne({ name: sceneName });
  });
}

module.exports = { createScene, findSceneByName };
