const express = require("express");
const scenes = require("../model/scenesInMongo");
const formatSceneAsText = require("../views/formatSceneAsText");

let wallet = 20;
let shoppingCart = [];
let playerName = "";

let router = express.Router();

router.post("/", (req, res) => {
  playerName = req.body.playerName;
  res.redirect("/scene/intro");
});

router.get("/:sceneName", async (req, res) => {
  let sceneName = req.params.sceneName;
  try {
    let scene = await scenes.findSceneByName(sceneName);

    if (sceneName === "orderPizza") {
      wallet -= 4;
      shoppingCart.push("1 pizza");
    }
    res.send(
      formatSceneAsText(
        wallet,
        shoppingCart,
        scene,
        "http://localhost:3000",
        playerName
      )
    );
  } catch (error) {
    console.log(error);
    res.status(404).send(`Scene ${sceneName} not found.\n`);
  }
});

module.exports = router;
