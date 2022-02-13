// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, 
// chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

// Creo un array con dentro il nome degli invitati che possono partecipare alla festa
const invited = ['jack', 'mike', 'daisy', 'jay'];
let find = false;
// chiedo il nome all'utente
const userInputName = prompt('Insert your name here');
const userName = userInputName.toLowerCase();
console.log (userInputName, userName);

// creo un ciclo for per la lunghezza dell'array
for (let i = 0; i <invited.length; i++){
    if(userName === invited[i]){
        find = true;
    }
}

console.log(find);
if (find === true){
    alert('You are on the guest list! Welcome!')
} else(
    alert('I\'m sorry, you\'re not on the guests list!')
)

// FARE IN MODO CHE IL NOME SE CORRISPONDE MA HA DELLE MAIUSCOLE VIENE CONSIDERATO COME TROVATO LO STESSO
