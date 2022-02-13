// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserireun numero, 
// se è dispari inseriscilo nell’array.

const oddNumbers = [];
let index = 0;

while(index < 6){ 
    
    let userNumber = parseFloat(prompt(`Inserisci il ${index+1}° numero`));
    console.log(userNumber);

    while(isNaN(userNumber)){
        alert('Devi inserire un numero in cifre! Riprova!')
        userNumber = parseInt(prompt(`Inserisci il ${index+1}° numero`));
        console.log(userNumber);
    }

    if (userNumber % 2 != 0 ){
        console.log('dispari');
        oddNumbers.push(userNumber);

    }else{
        console.log('pari');
    }

    index++;
}

console.log(oddNumbers);