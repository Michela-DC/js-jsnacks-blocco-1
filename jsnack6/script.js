// Stampa il cubo dei primi N numeri, dove N è un numero indicato dall’utente.

//creo un array vuoto
let array = [];
const exponent = 3;

// Chiedo all'utente un numero random da 1 a 20
let firstNumber = parseInt(prompt('Inserisci il primo numero intero:'));
console.log(firstNumber);

while(isNaN(firstNumber)){
    console.log(`${firstNumber} non è un numero in cifre`);
    alert('Devi inserire un numero in CIFRE!')
    firstNumber = parseInt(prompt('Inserisci il primo numero intero:'));
    console.log(firstNumber);
}

// Chiedo un secondo numero all'utente che sia minore del primo numero chiesto
let secondNumber = parseInt(prompt('Inserisci il secondo numero intero minore del numero precedentemente inserito:')); 
console.log(secondNumber);

while(isNaN(secondNumber) || (secondNumber > firstNumber)){
    console.log(`${secondNumber} non rispetta i criteri richiesti`);
    alert('Devi inserire un numero in CIFRE e deve essere MINORE del primo numero!')
    secondNumber = parseInt(prompt('Inserisci il secondo numero intero minore del primo numero:'));
    console.log(secondNumber);
}


// creo un ciclo for che dovrà essere lungo quanto il numero inserito dall'utente e allínterno creo dei numeri random che andrò ad inserire dentro un array
for(let i = 0; i < firstNumber; i++){
    array[i] = Math.floor(Math.random()* 100 + 1);
    console.log(`${i+1}° =`, array[i]);
}

i = 0; // devo reimpostare l'indice a 0 per usarlo nel while 

// creo un ciclo while che cicla da 0 a < N, in cui N è il secondo numero inserito dall'utente
while (i < secondNumber){
    //dentro al ciclo stampo in cubo dei primi N numeri che sono dentro l'rray usando il metodo Math.pow
    const cube = Math.pow(array[i], exponent); //per calcolare la potenza potevo anche fare cube = array[i] ** exponent
    console.log(`Il cubo di ${array[i]} è`, cube);

    i++;
}

