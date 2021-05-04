const scenes = require("./scenesInMongo");

scenes.createScene(
  "intro",
  `you're craving pizza.  You can't remember the last time you craved pizza so intensely.
`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/orderPizza' style='text-decoration: none;'>You decide to order pizza.</a>",
      scene: "orderPizza",
    },
    {
      description:
        "<a href='http://localhost:3000/scene/makePizza' style='text-decoration: none;'>You decide to make your own pizza.</a>",
      scene: "makePizza",
    },
  ]
);

scenes.createScene(
  "orderPizza",
  `Why waste time cooking when you can be coding?  You've been wanting to try that new pizza place that all the cool kids are talking about.  You check out their website and see they have 2 options:<br>
  -vegetarian<br>
  -ham and pineapple
  `,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/vegetarianPizza' style='text-decoration: none;'>You choose the vegetarian pizza.</a>",
      scene: "vegetarianPizza",
    },
    {
      description:
        "<a href='http://localhost:3000/scene/hamAndPineapplePizza' style='text-decoration: none;'>You choose the ham and pineapple pizza.</a>",
      scene: "hamAndPineapplePizza",
    },
  ]
);

scenes.createScene(
  "vegetarianPizza",
  `You have excellent taste, so you go with the vegetarian option.  Mmm, cheese-covered veggies!  You proudly place your order, only to be told that because of the restaurant's popularity, there is a 2-hour wait on all orders!  Oh no!!`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/makePizza' style='text-decoration: none;'>You decide to cancel your order and make your own pizza instead.</a>",
      scene: "makePizza",
    },
    {
      description:
        "<a href='http://localhost:3000/scene/waitForPizza' style='text-decoration: none;'>You decide to wait for the pizza.</a>",
      scene: "waitForPizza",
    },
  ]
);

scenes.createScene(
  "hamAndPineapplePizza",
  `You incorrectly chose the ham and pineapple pizza.  Nobody should eat that garbage.  Please choose again.`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/vegetarianPizza' style='text-decoration: none;'>You choose the vegetarian pizza.</a>",
      scene: "vegetarianPizza",
    },
  ]
);
scenes.createScene(
  "waitForPizza",
  `You decide to put on a few episodes of The Witcher to take your mind off your empty stomach.  Gooooo, Geralt!  Finally, you hear the doorbell - the pizza has arrived!  You answer the door and return to your couch.  Ahhh, an evening of pizza and monster-slaying.  All is right with the world.`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/end' style='text-decoration: none;'>End</a>",
      scene: "end",
    },
  ]
);
scenes.createScene(
  "end",
  `Congratulations!!!!<br><br>
  You were successful in satisfying your empty stomach!<br><br>
  THE END`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/intro' style='text-decoration: none;'>Replay!</a>",
      scene: "intro",
    },
  ]
);
scenes.createScene(
  "makePizza",
  `Everyone knows the best pizza is homemmade pizza.  Yum!  Your mouth waters just thinking about it.

You check the fridge and realize you're out of pizza-making ingredients.  You'll have to head to the store.`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/organicStore' style='text-decoration: none;'>You decide to go to the small organic store down the street.</a>",
      scene: "organicStore",
    },
    {
      description:
        "<a href='http://localhost:3000/scene/superstore' style='text-decoration: none;'>You decide to go to the huge grocery store that has everything (including cheap prices).</a>",
      scene: "superstore",
    },
  ]
);

// *** Can these ingredients be added to an inventory (array)??  Add some kind of calculator and counting down wallet? Same for giant store.
scenes.createScene(
  "organicStore",
  `You grab your mask and your reusable bag, and head out to the cute little organic store on your street.  You love that it's so small, you won't have to wander the aisles for hours!  You pick up most of your ingredients.  Unfortunately, you quickly realize that they're sold out of flour, except for one little bag of rice flour.  Hmm.  You see another customer eying the bag.  Do you grab it before she can, and try your luck at making rice flour pizza dough?`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/riceFlour' style='text-decoration: none;'>You decide to try the rice flour.</a>",
      scene: "riceFlour",
    },
    {
      description:
        "<a href='http://localhost:3000/scene/superstore' style='text-decoration: none;'>Nope, you have your heart set on the perfect pizza, and you've never tried baking with rice flour before.  You just don't want to risk it today, so you decide to go to the huge grocery store that has everything (including cheap prices).</a>",
      scene: "superstore",
    },
  ]
);
scenes.createScene(
  "superstore",
  `You head out to the giant store that has everything.  Unfortunately, it also has miles of aisles, and you spend what feels like hours searching for the ingredients you want.  When you finally find all the items you want, you go to the checkouts, only to find that seemingly everyone else in the city is also buying their groceries right now.  You kill some time looking at cat photos online, then finally make it to the front of the line and pay for your groceries.`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/goHome' style='text-decoration: none;'>You go home.</a>",
      scene: "goHome",
    },
  ]
);
scenes.createScene(
  "riceFlour",
  `Just as the other customer is reaching for the bag, you grab it and throw it into your basket.  She glares at you, and you pretend not to notice by staring at a nearby display of basil plants.  Oooooh, fresh basil!  You pick up a plant and add it to your cart.  You check your shopping list and see that you've grabbed all the items on it, and you hardly have any money left.  It would have been a lot cheaper just to buy a pizza.  Oh well.  You pay for your items and head home.`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/goHome' style='text-decoration: none;'>You go home.</a>",
      scene: "goHome",
    },
  ]
);
scenes.createScene(
  "goHome",
  `You grab your groceries and go home.  You're so hungry you can't stand it, but this pizza is going to be sooooo worth it (hopefully).  You do a search for "easy pizza dough" and start mixing that up, accidentally covering your kitchen with a cloud of flour when you open the bag.  You notice a human-shaped flour outline on the wall behind you.  Whatever, you can deal with that later.  You make even more of a mess when you decide to toss your pizza dough in the air like the pros do, and end up dropping it.  Good thing you washed the floors last month!  You pick off a few obvious pieces of dirt and stick the weirdly shaped crust on a pan, then smother it with sauce, delicious veggies, and cheese.  You throw it in the oven and wait.`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/eatHomemadePizza' style='text-decoration: none;'>Eat the pizza!</a>",
      scene: "eatHomemadePizza",
    },
  ]
);
scenes.createScene(
  "eatHomemadePizza",
  `You set the table, pull out some battery-powered candles, and put on some music.  You take the pizza out of the oven and almost cry at its perfection.  Your first bite actually does make you cry, because the molten cheese burns your mouth.  Oops.  Once you've waited for it to cool slightly, you finish off the remaining slices.  So delicious!`,
  [
    {
      description:
        "<a href='http://localhost:3000/scene/end' style='text-decoration: none;'>End</a>",
      scene: "end",
    },
  ]
);
