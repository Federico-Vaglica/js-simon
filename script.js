var randomNumbers = [];
var userNumbers = [];
var numberTrovati = [];








/*CONTROLLO SE I NUMERI NON SONO UGAULI E LI PUSHO ALL INTERNO DELL ARRAY*/
while (randomNumbers.length < 5) {
    numeroCasuale = randomNu(1,100);
    if (randomNumbers.includes(numeroCasuale)== false) {
        randomNumbers.push(numeroCasuale);
    }
}

alert(randomNumbers);



/*FUNZIONE DI TIME OUT */
setTimeout(function() {
    while(userNumbers.length < 5) {
        numeroUser = parseInt(prompt('inserisci un numero'));
        if(userNumbers.includes(numeroUser) == false) {
            userNumbers.push(numeroUser);
        }
    }
    
    matchs(randomNumbers,userNumbers);
    alert('hai trovato:' + numberTrovati.length);
    alert('I numeri sono:' + numberTrovati);
}, 30000);












/*******************************FUNZIONI ****************************************/


/*NUMERI RANDOM*/
function randomNu(min,max) {
    return Math.floor(Math.random() * (max - min + 1) ) + min;
}

/*VERIFICO SE CI SONO MATCH*/
function matchs(val1,val2){
    for (i=0; i<val1.length; i++){
        if(val1.includes(val2[i])){
          numberTrovati.push(val2[i]);
        }
    } 
    return numberTrovati;
}























/*ESPERIMENTO FALLITO*/


// random(0);
// askNumber(0);
// matchs(randomNumbers,userNumbers);
// result(numberTrovati);


/*******************************************Funzioni*****************************************/

/*Funzione che crea 5 numeri random e li pusha all interno dell'array*/

// function random(num){
//   if(num >= 5) {
//     alert(randomNumbers);
//   } else {
//   randomNumbers.push( Math.floor((Math.random() * 100) + 1));
//   random(num+1);
//   }
// }

/*Funzione che richiede un numero da inserie per 5 volte e lo pusha all'interno dell array*/
// function askNumber(num){
//   var userNumber;
//   if(num >= 5) {
//     return ;
//   } else {
//   userNumber = parseInt(prompt('Inserisci il numero '));
//   userNumbers.push(userNumber);
//   askNumber(num+1);
//   }
// }

// /*Funzione che ricerca corrsipondenza tra i due array */
// function matchs(val1,val2){
//     for (i=0; i<val1.length; i++){
//         if(val2.includes(val1[i])){
//           numberTrovati.push(val1[i]);
//         }
//     }
// }

// /*Controllla se ci sono numeri corrispodenti se si dice quanti e quali */
// function result(val1) {
//     if(val1.length>0){
//         alert('Hai indovinato ' + val1.length + ' numeri');
//         alert('I numeri che hai indovinato sono ' + val1);
//     } else {
//         alert('Non ci sono corrispondenze');
//     }
// }
