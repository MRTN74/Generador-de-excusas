// Using javascript, create a function that generates and returns a random excuse with the following structure:
import "./style.css";

let who = ["The dog", "My grandma", "His turtle", "My bird"];
let what = ["ate", "peed", "crushed", "broke"];
let action = ["my homework", "the keys", "the car"];
let when = [
  "before the class",
  "right on time",
  "when I finished",
  "during my lunch",
  "while I was praying"
];
function treaerIndexAleatorio(arreglo) {
  return Math.floor(Math.random() * arreglo.length);
}

function excuseGenerator(quien, que, cuando, accion) {
  let positionQuien = treaerIndexAleatorio(who);
  let positionQue = treaerIndexAleatorio(what);
  let positionCuando = treaerIndexAleatorio(when);
  let positionAccion = treaerIndexAleatorio(action);
  return (
    quien[positionQuien] +
    " " +
    que[positionQue] +
    " " +
    accion[positionAccion] +
    " " +
    cuando[positionCuando]
  );
}
function onLoad() {
  var excusa = document.getElementById("excuse");
  excusa.innerHTML = excuseGenerator(who, what, when, action);
}
window.onload = onLoad;
