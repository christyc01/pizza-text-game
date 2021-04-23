// const { playerName } = require("../server");
// const server = require("../server");

function lineWrap(text, width) {
  let wrappedText = "";
  let paragraphs = text.split("\n");
  paragraphs.forEach((paragraphText) => {
    wrappedText += "\n";
    columnCount = 2;
    let words = paragraphText.split(" ");
    words.forEach((word) => {
      let endColumn = columnCount + word.length;
      if (endColumn > width) {
        wrappedText += "\n";
        columnCount = 0;
      }
      wrappedText += word + " ";
      columnCount += word.length + 1;
    });
  });
  return wrappedText;
}

// NOTE TO ANYONE READING THIS: Yes, the styling I've added below is awful and not a good way to do it. I was focusing on learning the back end for this project and will likely revisit the this once I learn React.
function formatSceneAsText(
  wallet,
  shoppingCart,
  scene,
  width,
  baseUrl,
  playerName
) {
  let today = new Date().toLocaleString("en-us", { weekday: "long" });
  let time = new Date().toTimeString().substr(0, 5);
  let shoppingCartString = shoppingCart.join(", ");
  let body = `
  
  
  <body style='background-color:#ffcc00; margin:0px; text-align: center; font:15px Arial;' >
  <p style="padding: 20px; text-align: left;"><strong>It's ${time} on ${today}.<br>
${playerName}'s shopping cart contains: ${shoppingCartString}<br>
${playerName}'s wallet contains: $${wallet}</strong></p>
<div style='background-color: #fff; padding:50px; box-shadow:inset black 0px 0px 20px; font-size: 20px;'>
${lineWrap(scene.description, width)}
</div></body>
`;
  // if (scenes.sceneName === "intro") {
  //   body += `HEY! THE CURRENT TIME IS ${time} on ${today}`;
  //   return body;
  // }
  if (scene.options.length > 0) {
    body += `<p style="font:20px Arial;"><strong>WHAT IS YOUR CHOICE?</strong></p>`;
    scene.options.forEach((option) => {
      body += `
<p style="font:15px Arial;">
<button style="padding: 10px; border-radius:20px; background-color: #fff; font-size: 20px; box-shadow: inset black 0px 0px 10px;"> ${option.description} </button></p></body>
`;
    });
    return body;
  }
}

module.exports = formatSceneAsText;
