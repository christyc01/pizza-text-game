const scenes = require("./scenesInMongo");

scenes.createScene(
  "intro",
  `You're craving pizza.
`,
  [
    {
      description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>",
      scene: "orderPizza",
    },
    {
      description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You decide to make your own pizza. ",
      scene: "makePizza",
    },
  ]
);

scenes.createScene(
  "orderPizza",
  `Why waste time cooking when you can be coding?  You've been wanting to try that new pizza place that all the cool kids are talking about.  You check out their website and see they have 2 options:
  -vegetarian ($4)
  -ham and pineapple ($5)
  `,
  [
    {
      description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You choose the vegetarian pizza.",
      scene: "vegetarianPizza",
    },
    {
      description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You choose the ham and pineapple pizza.",
      scene: "hamAndPineapplePizza",
    },
  ]
);

scenes.createScene(
  "vegetarianPizza",
  `You have excellent taste, so you go with the vegetarian option.  Mmm, cheese-covered veggies!  You proudly place your order, only to be told that because of the restaurant's popularity, there is a 2-hour wait on all orders!.`,
  [
    {
      description:
      "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You decide to cancel your order and make your own pizza instead.",
      scene: "makePizza",
    },
    {
      description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You decide to wait for the pizza.",
      scene: "waitForPizza",
    },
  ]
);

scenes.createScene(
  "hamAndPineapplePizza",
  `You incorrectly chose the ham and pineapple pizza.  Nobody should eat that garbage.  Please choose again.`,
  [
    {
      description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You choose the vegetarian pizza.",
      scene: "vegetarianPizza",
    },
  ]
);
scenes.createScene(
  "waitForPizza",
  `You decide to put on a few episodes of The Witcher to take your mind off your empty stomach.  Gooooo, Geralt!  Finally, you hear the doorbell - the pizza has arrived!  You answer the door and return to your couch.  Ahhh, an evening of pizza and monster-slaying.  All is right with the world.`,
  [{ description: "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""", scene: "end" }]
);
// *** Add an if statement to stop this one from showing choices
scenes.createScene(
  "end",
  `Congratulations!  You were successful in satisfying your empty stomach.
THE END`,
  ["..."]
);
scenes.createScene(
  "makePizza",
  `Everyone knows the best pizza is homemmade pizza.  Yum!  Your mouth waters just thinking about it.

You check the fridge and realize you're out of pizza-making ingredients.  You'll have to head to the store.`,
  [
    {
      description:
      "<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>""You decide to go to the small organic store down the street.",
      scene: "organicStore",
    },
    {
      description:
        ""<a href='http://localhost:3000/scene/orderPizza'>You decide to order pizza.</a>"You decide to go to the huge grocery store that has everything (including cheap prices).",
      scene: "giantStore",
    },
  ]
);

// *** Can these ingredients be added to an inventory (array)??  Add some kind of calculator and counting down wallet? Same for giant store.
scenes.createScene(
  "organicStore",
  `You head out to the cute little organic store on your street.  You love that it's so small, you won't have to wander the aisles for hours!  What do you decide to buy?`,
  [
    { description: "Flour", scene: "*****SCENENAME*****" },
    { description: "Tomatoes", scene: "*****SCENENAME*****" },
    { description: "Onions", scene: "*****SCENENAME*****" },
    { description: "Eggplants", scene: "*****SCENENAME*****" },
    { description: "Done shopping", scene: "*****SCENENAME*****" },
  ]
);
scenes.createScene(
  "giantStore",
  `You head out to the giant store that has everything.  Unfortunately, it also has miles of aisles, and you spend what feels like hours searching for the ingredients you want.  When you finally find out where things are, what do you decide to buy?`,
  [
    { description: "Flour", scene: "*****SCENENAME*****" },
    { description: "Tomatoes", scene: "*****SCENENAME*****" },
    { description: "Onions", scene: "*****SCENENAME*****" },
    { description: "Eggplants", scene: "*****SCENENAME*****" },
    { description: "Done shopping", scene: "*****SCENENAME*****" },
  ]
);
// scenes.createScene("*****SCENENAME*****", `*****CONTENT*****`, [
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
// ]);
// scenes.createScene("*****SCENENAME*****", `*****CONTENT*****`, [
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
// ]);
// scenes.createScene("*****SCENENAME*****", `*****CONTENT*****`, [
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
// ]);

// // TEMPLATE FOR SCENES
// scenes.createScene("*****SCENENAME*****", `*****CONTENT*****`, [
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
//   { description: "*****description*****", scene: "*****SCENENAME*****" },
// ]);
