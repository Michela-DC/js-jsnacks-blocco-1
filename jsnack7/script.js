// Stampa le potenze di 2 fino a 1000.

//creo un ciclo che cicla fino a 1000, dentro devo elevare 2 ad un numero che si incrementa di 1 a ogni giro quindi uso l'indice
for(let i = 0; i<=1000; i++){
    const potenza = Math.pow(2,i);
    console.log(`2 elevato a ${i} =`, potenza);
}

