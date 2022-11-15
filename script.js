let listaSpesa = ["avocado", "uova", "pane", "latte", "succo", "patatine", "sale", "olio"];

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

for (let i = 0; i < listaSpesa.length; i++) {
    elenco.innerHTML += "<li>"+listaSpesa[i]+"</li>";
 }