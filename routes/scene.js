const express = require("express");
const scenes = require("../model/scenesInMongo");
const formatSceneAsText = require("../views/formatSceneAsText");

let router = express.Router();

router.get("/:sceneName", async (req, res) => {
  let wrapWidth = req.query.wrapWidth || 60;
  let sceneName = req.params.sceneName;
  try {
    let scene = await scenes.findSceneByName(sceneName);
    res.send(formatSceneAsText(scene, wrapWidth, "http://localhost:3000"));
    // res.send("res.send(scene)", scene);
  } catch (error) {
    console.log(error);
    res.status(404).send(`Scene ${sceneName} not found.\n`);
  }
});

router.get("/:moneyAmount", async (req, res) => {
  try {
    let money = await scenes.viewWallet(moneyAmount);
    res.send(money);
  } catch (error) {
    console.log(error);
    res.status(404).send("Nope.");
  }
});

module.exports = router;
