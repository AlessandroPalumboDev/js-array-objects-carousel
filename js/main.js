'use strict';

// dati da utilizzare
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    },

    {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    },

    {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    },

    {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    },

    {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// Dichiaro una variabile da assegnare all'elemento div.items
const items = document.querySelector('.items');

let obj = 0;

// creo ciclo
images.forEach((_, i) => {

    // creazione div
    const item = document.createElement('div');

    // assegnazione classe al div
    item.classList.add('item',);

    if(i === 0){
        item.classList.add('active');
    };

    // creazione foto e dato percorso immagine
    const foto = document.createElement('img');
    foto.src = (`./${images[i].image}`);

    // creazione titolo e assegnazione
    const titolo = document.createElement('h2');
    titolo.append(images[i].title);

    // creazionje testo e assegnazione
    const testo = document.createElement('p');
    testo.append(images[i].text);

    // appesi elementi
    item.append(foto, titolo, testo);

    // appeso div
    items.append(item);

});

const allItems = document.querySelectorAll('.item');
// // variabili delle frecce
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

// eventi al click sulle frecce
next.addEventListener('click', () => {
    allItems[obj].classList.remove('active');
        obj++
    allItems[obj].classList.add('active');
// aggiungere uno stop
});

prev.addEventListener('click', () => {
    allItems[obj].classList.remove('active');
        obj--
    allItems[obj].classList.add('active');
// aggiungere uno stop
});


