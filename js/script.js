/* Dati tre array contenenti:
 - una lista ordinata di 5 immagini,
 - una lista ordinata dei relativi 5 luoghi e
 - una lista di 5 news,
creare un carosello come nella foto allegata.

MILESTONE 1
Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo l’immagine grande a sinistra e le thumbnails sulla destra in modo da poter stilare lo slider; avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull’aspetto logico.

MILESTONE 2
Adesso rimuoviamo tutto il markup statico e inseriamo le immagini dinamicamente servendoci dell’array fornito e un semplice ciclo for che concatena un template literal. Al termine di questa fase ci ritroveremo con lo stesso slider, ma costruito dinamicamente attraverso JavaScript.

MILESTONE 3
Al click dell’utente sulle frecce verso l’alto o verso il basso, l’immagine attiva diventa visibile in formato grande a sinistra e nel suo angolo in basso a destra dovranno essere aggiunti i relativi:
 - titolo e
 - testo.
Allo stesso tempo nelle miniature l’immagine attiva dovrà apparire in evidenza rispetto alle altre.*/

// Creazione array
const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

// Visualizzazione delle IMG
const imgContainer = document.querySelector ('.images-container');
const thumbsContainer = document.querySelector ('.thumbs-container');

// Ciclo per creare lo slider
for (let index = 0; index < items.length; index++) {
    let classElement = '';
    // Cerchiamo il primo elemento
    if (index == 0) {
        classElement = 'first active';
    // Cerchiamo l'ultimo elemento
    } else if (index == items.length - 1) { 
        classElement = 'last';
    }
    // Creazione e Visualizzazione nell HTML
    const leftItem = `
    <div class="item ${classElement}">
        <img src="${items[index]}" alt"">
        <div class="text">
            <h3>${title[index]}</h3>
            <p>${text[index]}</p>
        </div>
    </div>`;
    console.log(items[index]);
    const rightThumb = `
        <div class="thumb ${classElement}">
            <img src="${items[index]}" alt"">
        </div>`;

    imgContainer.innerHTML += leftItem;
    thumbsContainer.innerHTML += rightThumb;
}

const buttonNext = document.querySelector('.side-slider .thumbs-container .next');
const buttonPrev = document.querySelector('.side-slider .thumbs-container .prev');

buttonNext.addEventListener('click',
    function () {

        const elementActive = document.querySelector('.slider .images-container .item.active');
        const thumbActive = document.querySelector('.side-slider .thumbs-container .thumb.active');
        const listClasses = elementActive.classList;
        let last = false;
        for (let i = 0; i < listClasses.length; i++) {
        
            if (listClasses[i] == 'last') {
                last = true;
            }
        }
        let lastThumb = thumbActive.classList.contains('last');
        if (last == false) {
            elementActive.classList.remove('active');
            const elementNext = elementActive.nextElementSibling;
            elementNext.classList.add('active');
        }
        if (lastThumb == false) {
            thumbActive.classList.remove('active');
            const thumbNext = thumbActive.nextElementSibling;
            thumbNext.classList.add('active');
        }
    }
);

buttonPrev.addEventListener('click',
    function () {
        const elementActive = document.querySelector('.slider .images-container .item.active');
        const thumbActive = document.querySelector('.side-slider .thumbs-container .thumb.active');
        const listClasses = elementActive.classList;
        let first = false;
        for (let i = 0; i < listClasses.length; i++) {

            if (listClasses[i] == 'first') {
                first = true;
            }
        }
        let firstThumb = thumbActive.classList.contains('first');
        if (first == false) {  
            elementActive.classList.remove('active');
            const elementPrev = elementActive.previousElementSibling;
            elementPrev.classList.add('active');
        }
        if (firstThumb == false) {
            thumbActive.classList.remove('active');
            const thumbPrev = thumbActive.previousElementSibling;
            thumbPrev.classList.add('active');
        }
    }
);
