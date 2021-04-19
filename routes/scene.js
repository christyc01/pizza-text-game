const express = require("express");
const scenes = require("../model/scenesInMongo");
const formatSceneAsText = require("../views/formatSceneAsText");

let wallet = 10;
let shoppingCart = [];

let router = express.Router();

router.get("/:sceneName", async (req, res) => {
  let wrapWidth = req.query.wrapWidth || 60;
  let sceneName = req.params.sceneName;
  try {
    // let wallet = 10;
    let scene = await scenes.findSceneByName(sceneName);
    if (sceneName === "intro") {
      let today = new Date();
      let time = today.getHours() + ":" + today.getMinutes();
      console.log(`It's ${time}`);
    }
    if (sceneName === "orderPizza") {
      console.log("ORDERING PIZZA");
      wallet -= 4;
      console.log("wallet should now contain $6: ", wallet);
      shoppingCart.push("1pizza");
      console.log(shoppingCart);
    }
    res.send(formatSceneAsText(scene, wrapWidth, "http://localhost:3000"));
  } catch (error) {
    console.log(error);
    res.status(404).send(`Scene ${sceneName} not found.\n`);
  }
});

module.exports = router;
