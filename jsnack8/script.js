// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = prompt('Inserisci un numero di 4 cifre'); 
// non metto il parseInt perchè lo trasforma in intero poi non potrei usare il .length  --> The length function in Javascript is used to return the length of an object. And since length is a property of an object it can be used on both arrays and strings. 
console.log(userNumber);

let somma = 0;

//verifico che abbia inserito un numero in cifre e che il numero sia di quattro cifre
while( isNaN(userNumber) || userNumber.length !== 4 ){ 
    console.log(userNumber, 'non soddisfa le condizioni richieste')
    userNumber = prompt('Il numero deve essere di 4 CIFRE e NON SCRITTO IN PAROLA! Riprova!')
}

// Devo trasformare il numero inserito dall'utente in una array 
const digits = [...`${userNumber}`]; //come risultato avrò un array di caratteri
console.log(digits);
// oppure potevo usare lo split --> const digits = userNumber.split(); e avrò sempre un array di caratteri

// Creo un ciclo che gira dentro l'array delle cifre e le somma tra di loro
for(let i = 0; i < digits.length; i++){
    somma = somma + parseInt(digits[i]);
    // devo mettere il parseInt qui perchè ritorna degli interi quindi posso efettuare l'operazione matematica
}

console.log(`la somma di tutte le cifre del numero inserito è ${somma}`);

/*
POTEVO USARE IL CICLO DO WHILE:

let userNumber;
console.log(userNumber);

let somma = 0;

do{

  userNumber = prompt('Inserisci un numero di 4 cifre');

}while( userNumber.length !== 4 || isNaN(userNumber) )
*/
