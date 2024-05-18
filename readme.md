Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione

Creare un carosello come nella foto allegata.

Milestone 0:
Analizzate l'html statico (è una base da cui partire) del carosello per comprenderne al meglio la struttura da manipolare.

Milestone 1:
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
Al click dell'utente sulle frecce , l'immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.

Milestone 2:
Aggiungere il **ciclo infinito** del carosello. Ovvero se la miniatura attiva è la prima e l'utente clicca la freccia verso l'alto, la miniatura che deve attivarsi sarà l'ultima e viceversa per l'ultima miniatura se l'utente clicca la freccia verso il basso.

BONUS 1:
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.

BONUS 2:
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.

BONUS 3:
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

- MILESTONE O
    - Analizzo l'html statico

- MILESTONE 1
    - Dichiaro una variabile da assegnare all'elemento div.items per l'inserimento di un div 'item' con al suo interno immagine, titolo e testo 
    - Creo ciclo forEach per inserire tutti gli elementi di tutti gli oggetti dell'array in index dando la classe 'item' a tutti gli elementi e la classe 'active' solo al primo elemento

    - Con querySelectorAll sulla classe item creo un array degli elementi inseriti

    - Definisco le variabili delle frecce richiamandole tramite la loro classe

    - Aggiungo evento al click sulle frecce che rimuova la classe 'active' sull'elemento attuale e la aggiunga a un altro elemento seguendo l'ordine degli elementi all'interno dell'array
    
