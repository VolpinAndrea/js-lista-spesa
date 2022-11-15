let listaSpesa = ["avocado", "uova", "pane", "latte", "succo", "patatine", "sale", "sale", "olio"];

// IL SALE NON PIACE ALL'HTML?
console.log("STAMPA FOR");

for (let i = 0; i < listaSpesa.length; i++) {
   console.log(listaSpesa[i]);

}

console.log("STAMPA WHILE");
let j = 0;
while(j < listaSpesa.length){

    console.log(listaSpesa[j]);
    j++

}

let elenco = document.querySelector(".elencoPuntato");
let pulsanteX = '<button type="button" class="btn-close" aria-label="Close"></button>'; //  "+pulsanteX+"

for (let i = 0; i < listaSpesa.length; i++) {
    elenco.innerHTML += "<li><h4>"+listaSpesa[i]+"</h4></li>";
 }

 let aggButton = document.getElementById("aggiungi");

 aggButton.addEventListener('click', function(){

    let aggiunta = prompt("Quale elemento vuoi aggiungere?");
    elenco.innerHTML += "<li><h4>"+aggiunta+"</h4></li>";

 })

