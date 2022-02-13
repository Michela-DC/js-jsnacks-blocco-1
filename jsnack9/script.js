// Calcola la somma e la media dei primi 10 numeri.

//creo un array vuoto
let array = [];
let somma = 0;

// Chiedo all'utente un numero 
let userNumber = parseInt(prompt('Inserisci un numero maggiore o uguale a 10'));
console.log(userNumber);

while(isNaN(userNumber) || (userNumber < 10) ){
    console.log(`${userNumber} non soddisfa i criteri richiesti`);
    userNumber = parseInt(prompt('Devi inserire un numero in CIFRE, MAGGIORE o UGUALE a 10! Riprova!'));
    console.log(userNumber);
}

// creo un ciclo for che dovrà essere lungo quanto il numero inserito dall'utente e all'interno creo dei numeri random che andrò ad inserire dentro l'array vuoto 
for(let i = 0; i < userNumber; i++){
    array[i] = Math.floor(Math.random() * 100 + 1);
    console.log(`${i+1}° =`, array[i]);
}

i = 0; // devo reimpostare l'indice a 0 per usarlo nel while 

// prendo i primi 10 numeri usando un ciclo while
while (i < 10){
    somma = somma + array[i];

    i++;
}

console.log(`la somma dei primi 10 numeri è ${somma}`);

const media = somma / 10;
console.log(`la media dei primi 10 numeri è di ${media}`);
