/* JSNACK 3
Il software deve chiedere per 5 volte all’utente di inserire un numero. 
Il programma stampa la somma di tutti i numeri inseriti. 
Esegui questo programma in due versioni, con il for e con il while. */

/*
// CICLO FOR
// Creo un array poi creo un ciclo for che deve girare per 5 volte (ovvero per quanti numeri ci devono essere dentro l'array)
// dentro il for chiedo un numero all'utente, lo pusho dentro l'array, finché non ci saranno 5 numeri dentro l'array (condizione che metto dicendo che l'array deve ciclare per 5 volte)
const numbers = [];
let somma = 0;
for (i = 0; i <=4; i++){ 
    let userNumber = parseInt(prompt(`Inserisci il ${i+1}° numero`));
    console.log(userNumber);

    while(isNaN(userNumber)){
        alert('Devi inserire un numero in cifre! Riprova!')
        userNumber = parseInt(prompt(`Inserisci il ${i+1}° numero`));
        console.log(userNumber);
    }
    numbers.push(userNumber);
    somma = somma + numbers[i];
    console.log(`la somma attuale è di ${somma}`);
}
console.log(numbers);
console.log(`la somma dei numeri dentro l'array è di ${somma}`);
*/

// CICLO WHILE
const numbers = [];
let i = 0; //devo dichiarare un indice per tenere conto della posizione dentro l'array
let somma = 0;

while(numbers.length !== 5){ // la condizione è finché la lunghezza dell'array é diversa da 5
    
    let userNumber = parseInt(prompt(`Inserisci il ${i+1}° numero`));
    console.log(userNumber);

    while(isNaN(userNumber)){
        alert('Devi inserire un numero in cifre! Riprova!')
        userNumber = parseInt(prompt(`Inserisci il ${i+1}° numero`));
        console.log(userNumber);
    }

    numbers.push(userNumber);
    
    somma = somma + numbers[i];
    console.log(`la somma attuale è di ${somma}`);
    
    i++; //ora posso incrementare l'indice
}

console.log(numbers);
console.log(`la somma dei numeri dentro l'array è di ${somma}`);

