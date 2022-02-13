// Chiedi un numero di 4 cifre all’utente e calcola la somma di tutte le cifre che compongono il numero.

let userNumber = parseInt(prompt('Inserisci un numero di 4 cifre'));
console.log(userNumber);

let somma = 0;

//verifico che abbia inserito un numero in cifre e che il numero sia di quattro cifre
while( isNaN(userNumber) || (userNumber < 1000) ){
    console.log('non è un numero')
    userNumber = prompt('Il numero deve essere di 4 CIFRE e NON SCRITTO IN PAROLA! Riprova!')
}

// Devo trasformare il numero inserito dall'utente in una array di numeri
const digits = [...`${userNumber}`].map(Number);
console.log(digits);
// Uso lo spread per creare un array ma per farlo passo il numero inserito come se fosse una stringa e quindi avrò un array di caratteri 
// The spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object - In pratica è come se estrapolassimo tutti i suoi elementi in un solo colpo!
// map() creates a new array from calling a function for every array element.
//The Number() method converts a value to a number.
// In sintesi trasformo userInput in un array di caratteri poi con map(function) lo trasformo in un array di numeri.

// Creo un ciclo che gira dentro l'array delle cifre e le somma tra di loro
for(let i = 0; i < digits.length; i++){
    somma = somma + digits[i];
}

console.log(`la somma di tutte le cifre del numero inserito è ${somma}`);


/*
Altri metodi per trasformare un numero in una stringa:

const digits = Array.from(String(userNumber), Number);
- The Array.from() static method creates a new, shallow-copied Array instance from an array-like or iterable object.
- Usando String trasformo il numero in una stringa
The Number function will take any string character and will convert it into a number

const digits = String(userNumber).split("").map((userNumber)=>{
  return Number(userNumber)
})
- Typecast the integer into a string.
- Using the split() method to make it an array of strings.
- Iterate over that array using the map() method.
- Using the map() method returns the array of strings into an array of Integers.

*/