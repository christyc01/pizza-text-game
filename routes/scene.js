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
    let scene = await scenes.findSceneByName(sceneName);

    if (sceneName === "orderPizza") {
      console.log("ORDERING PIZZA");
      wallet -= 4;
      console.log("Wallet now contains: ", wallet);
      shoppingCart.push("1 pizza");
      console.log("Shopping card now contains: ", shoppingCart);
    }
    res.send(
      formatSceneAsText(
        wallet,
        shoppingCart,
        scene,
        wrapWidth,
        "http://localhost:3000"
      )
    );
  } catch (error) {
    console.log(error);
    res.status(404).send(`Scene ${sceneName} not found.\n`);
  }
});

module.exports = router;
