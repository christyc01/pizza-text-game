// require("../routes/scene");

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

function formatSceneAsText(scene, width, baseUrl) {
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
    });
    return body;
  }
}

module.exports = formatSceneAsText;
