// Esercizio 1: Crea una arrow function che accetta due numeri come parametri 
// e restituisce la loro sottrazione.

// const sottrazione = (num1, num2) => num1 - num2;

// const sottrazione1 = sottrazione(2, 2);
// console.log (sottrazione1);



// Esercizio 2: Crea un oggetto chiamato 'studente'. 
// Dovrebbe avere proprietà per 'nome' e 'età'. 
// Dovrebbe anche avere un metodo che usa la parola chiave 'this' per stampare il nome e l'età 
// dello studente e un metodo per incrementare l'età.

// const studente = {
//     nome: 'gigi',
//     cognome: 'rossi',
//     eta: 17,
//     etaAumenta: function(){
//         this.eta ++;
//     },
//     informazioni: function(){
//         console.log(this.nome);
//         console.log(this.eta);
//     }
// };

// studente.etaAumenta();
// studente.informazioni()



// Esercizio 3: Crea una semplice pagina HTML con un elemento div. 
// Usa JavaScript per cambiare l'innerHTML e l'innerText del div.

// window.addEventListener('load', () =>{
//     const body = document.body;
//     body.innerText = ' Hello World!';
//     body.innerHTML += '<h5>Sottotitolo</h5>';
// });


// Esercizio 4: Crea una lista non ordinata con tre elementi di lista.
// Usa JavaScript per aggiungere un nuovo elemento di lista alla fine della lista usando appendChild.
// Poi usa insertBefore per aggiungere un elemento di lista all'inizio della lista.

// const listaPietre = ['Quarzo rosa', 'Ossidiana', 'Ametista']

// window.addEventListener('load', () =>{
//     const body = document.body;

//     const ul = document.createElement('ul');
//     for(let i=0; i<listaPietre.length; i++){
//        const li = document.createElement('li');
//        li.innerText = listaPietre[i];
//        ul.appendChild(li);
//     }

//     body.appendChild(ul);

//     const aggiungiElementoFinale = document.createElement('li');
//     aggiungiElementoFinale.innerText = 'Occhio di tigre';
//     ul.appendChild(aggiungiElementoFinale);


//     const aggiungiElementoIniziale = document.createElement('li');
//     aggiungiElementoIniziale.innerText = 'Corniola';
//     ul.insertBefore(aggiungiElementoIniziale, ul.firstChild);

// });


// Esercizio 5: Crea un elemento div con class 'blu'.
// Usa JavaScript per controllare al click se il div ha la classe 'blu' usando classList.includes().
// Poi usa classList.add() per aggiungere una classe 'rosso' e classList.remove() per rimuovere la classe 'blu'.




// Esercizio 6: Crea un pulsante in HTML. 
// Usa JavaScript per impostare un attributo 'disabled' sul pulsante usando setAttribute().


// Esercizio 7: Crea un elemento div. Aggiungi un evento onmouseover che cambia il colore del div. 
// Aggiungi un evento onmouseout che cambia il colore del div indietro.
// Aggiungi un evento click che stampa un messaggio in console.