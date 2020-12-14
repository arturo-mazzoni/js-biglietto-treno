
var distanza = parseInt(prompt("Inserisci la distanza da percorrere in km"));
var eta = parseInt(prompt("Inserisci la tua età"));

var prezzo = distanza * 2;
// console.log(prezzo);

var sconto = (prezzo * 20 / 100);

if (eta < 18) {
  console.log(sconto);
}
