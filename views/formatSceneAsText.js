// NOTE TO ANYONE READING THIS: Yes, the styling I've added below is awful and not a good way to do it. I was focusing on learning the back end for this project and will likely revisit the this once I learn React.
function formatSceneAsText(wallet, shoppingCart, scene, baseUrl, playerName) {
  let today = new Date().toLocaleString("en-us", { weekday: "long" });
  let time = new Date().toTimeString().substr(0, 5);
  let shoppingCartString = shoppingCart.join(", ");
  let now;
  if (scene.name === "intro") {
    now = `It's ${time} on ${today}, and`;
  } else {
    now = "";
  }
  let body = `  
  <body style='background-color:#ffcc00; margin:0px; text-align: center; font:16px Arial;' >
  <p style="padding: 20px; text-align: left;"><strong>
${playerName}'s shopping cart contains: ${shoppingCartString}<br>
${playerName}'s wallet contains: $${wallet}</strong></p>
<div style='background-color: #fff; padding:50px; box-shadow:inset black 0px 0px 20px; font-size: 20px;'>
${now}
${scene.description}
</div></body>
`;
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
