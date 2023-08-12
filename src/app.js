// Using javascript, create a function that generates and returns a random excuse with the following structure:
let who = ["The dog", "My grandma", "His turtle", "My bird"];
let what = ["ate", "peed", "crushed", "broke"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
let action = ["my homework", "the keys", "the car"];

function excuseGenerator(quien, que, cuando) {
  let positionQuien = Math.floor(Math.random() * who.length);
  let positionQue = Math.floor(Math.random() * what.length);
  let positionCuando = Math.floor(Math.random() * when.length);
  return (
    quien[positionQuien] +
    " " +
    que[positionQue] +
    " " +
    "my homework" +
    " " +
    cuando[positionCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
