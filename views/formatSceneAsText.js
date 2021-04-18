let money = 5;

function lineWrap(text, width) {
  console.clear();
  let wrappedText = "";
  let paragraphs = text.split("\n");
  paragraphs.forEach((paragraphText) => {
    wrappedText += "\n";
    // wrappedText += "\n  ";
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

function formatSceneAsText(scene, width, baseUrl) {
  if (scene === "vegetarianPizza") {
    money -= 1;
    body += "FormatSceneAsText money: " + money;
  }
  let body =
    "************************************************\n" +
    lineWrap(scene.description, width) +
    "\n";
  if (scene.options.length > 0) {
    body += "---------------\n";
    body += "What do you do?\n";
    body += "---------------\n";
    scene.options.forEach((option) => {
      body +=
        "-->" +
        option.description +
        "\n" +
        `(Please enter: curl ${baseUrl}/scene/${option.scene})\n\n`;
      // body += option.description + "\n";
      // body += `--> If this is your choice, enter: curl ${baseUrl}/scene/${option.scene}\n\n`;
    });
    return body;
  }
}

module.exports = formatSceneAsText;
// module.exports = { formatSceneAsText, money: "money" };
module.exports.money = money;
