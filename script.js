// Using javascript, create a function that generates and returns a random excuse with the following structure:
let who = ['El perro','Mi abuela','Mi tortuga','Mi primo', 'Mi gato'];
let what = ['se comió','aplastó','robó','rompió', 'ensució', 'orino'];
let when = ['antes de clases','justo cuando terminé','mientras almorzaba','mientras cocinaba', 'cuando fui al gimnasio'];

function excuseGenerator(quien, que, cuando){
    numQuien = Math.floor(Math.random() * quien.length);
    numQue = Math.floor(Math.random() * que.length);
    numCuando = Math.floor(Math.random() * cuando.length);
    return quien[numQuien] + " " + que[numQue] + " " + "mi tarea" + " " + cuando[numCuando];
}
function onLoad(){
    var excusa = document.getElementById('excuse');
    excusa.innerHTML = excuseGenerator(who, what, when);
}
window.onload = onLoad;
