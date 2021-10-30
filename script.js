/*
ESERCIZIO:
Create un nuova pagina html, un nuovo file di stile e uno script js.
Non usare lo stesso della lezione.

1. Riprendendo la pagina web creata a lezione, voglio che il bottone che `rinomina l'elemento H1`
   aggiunga un testo inserito dall'utente, tramite prompt.

   Opzionale: create un elemento `<input>` e fate aggiungere il testo all'utente non più tramite
   il prompt ma tramite quel campo di `input`.
   TIP: anche `<input>` è un elemento, e presenta delle chiavi...
   tra queste ne trovate una anche per il testo in esso inserito...

2. Creare un elemento unordered list `<ul>` e un `<button>` all'interno del vostro HTML.
   Il click sul button andrà a creare un figlio `<li>` all'interno del padre `<ul>`.
   Non importa la quantità di `li` nè il valore che essi contengono. Ne basta anche uno.

AVANZATO:
Sulla base dell'esercizio 2. andate a gestire anche il contenuto (si intende il testo) del `li` e fate si
che l'utente possa inserirne tutti quelli che vuole. Il funzionamento dovrà simulare in tutto quello di
un dizionario/rubrica gestendo il flusso con i nuovi concetti di Parent / Children (padre / figlio)
visti oggi.
*/

//BOTTONE CHE PERMETTE DI CAMBIARE FOTO
const changeImgBtn= document.querySelector(".change-img")

changeImgBtn.addEventListener("click", () =>{
    window.location.reload(); 
})

// Il metodo reload dell'oggetto location permette di ricaricare la pagina corrente:
//window.location.reload() metodo reloadù
//Se lo applico a un bottone, questo mi darà l'impressione di sfogliare una gallery

//BOTTONE CHE AGGIUNGE IL TESTO SULLA FOTO
/*
1. Riprendendo la pagina web creata a lezione, voglio che il bottone che `rinomina l'elemento H1`
   aggiunga un testo inserito dall'utente, tramite prompt.

   Opzionale: create un elemento `<input>` e fate aggiungere il testo all'utente non più tramite
   il prompt ma tramite quel campo di `input`.
   TIP: anche `<input>` è un elemento, e presenta delle chiavi...
   tra queste ne trovate una anche per il testo in esso inserito...
   */

   const inputWrapper = document.querySelector(".frase-foto"); //div contenente l'input
   const textInputnode = inputWrapper.firstChild; //ritorna il nodo del primo elemento (l'input)
   const textInput = inputWrapper.firstElementChild; //ritorna il primo elemento (l'input)

   //console.log(textInputnode);
   //console.log(textInput);
  
   function getVal() {
      const val = document.querySelector('input').value;
      //console.log(val);
      newText.textContent = (val);
      newText.className = "testo-foto";
   }

   const changeInsTextBtn= document.querySelector(".add-text")
   const newText = document.createElement("p");
   const wrapperImgText = document.querySelector(".img-text");
 //newText.className = "testo-foto";
 //newText.textContent = (getVal());

   changeInsTextBtn.addEventListener("click", () =>{

         wrapperImgText.appendChild(newText);
         //getVal(); 
    },
    { once: true });
    
   
  
   

  //newText.className += "testo-foto";

console.log (newText);
console.log(wrapperImgText.children); 
console.log(wrapperImgText.lastElementChildren);
console.log(inputWrapper.children); //p non si trova nemmeno qui
//Ndo sta p?