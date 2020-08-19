"use strict";

// service worker registration - remove if you're not going to use it

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('serviceworker.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }, function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

// place your code below


console.log(`Hello world!`);


console.log('siema');
const name = 'Monika';
const age = 26;
console.log(name);
console.log(age);

console.log(`Nazywam się ${name} i mam ${age} lat`);

console.log('witaj przybyszu');

const about__paragraph = document.querySelector('.about__paragraph--js');

console.log(about__paragraph.innerHTML);

about__paragraph.innerHTML = '<strong>Pozdro</strong> JS!';

const paragraphs = document.querySelectorAll('p');

console.log(paragraphs);
console.log(paragraphs[0]);


const video = document.querySelector('.video--js');
video.innerHTML = 'hola, hola';

if ('javascript' != 'java') {
    console.log('to prawda!')
}

if (age < 20) {
    console.log('masz mniej niż 20 lat');
} else if ((age >= 20) && (age <= 30)) {
    console.log('masz więcej niż 20 lat ale mniej niż 30');
} else {
    console.log('jesteś 31+')
}

switch (age) {
    case 20:
        console.log('masz równo 20 lat');
    break;
    case 30:
        console.log('masz równo 30 lat');
    break;
    default:
        console.log(`masz ${age} lat`);
    break;
}

const amIOld = (age > 70) ? 'yes' : 'no';
console.log(amIOld);

function calculate(x) {
    x = x+ 3;
    console.log(`tradycyjnie ${x}`);
    return x*7; 
}

console.log(calculate(2));
const myCalculation = calculate(4);
console.log(myCalculation);

const calculateFat = (x) => {
    x = x+ 3;
    console.log(`fat: ${x}`);
    return x*7; 
}

console.log(calculateFat(2));

const welcome = (namee, agee) => {
    console.log(`Witaj ${namee}, masz ${agee} lat!`);
}

//welcome('Monika', 27);

const namee = 'Monika';
const agee = 27;

welcome(namee, agee);  


const button = document.querySelector('.header__button--js');
console.log(button);

button.addEventListener('click', (e) => {
    const header = document.querySelector('.main__header--js');
    header.innerHTML = 'klik, klik';
    header.classList.add('main__header--red')
    if (header.classList.contains('header__tittle-red')) {
        console.log('jest klasa');
    } else {
        console.log('brak klasy');
    }
});



const navigationSwitcher = document.querySelector('.navigation__switcher--js');

navigationSwitcher.addEventListener('click', (e) => {
    const navigationList = document.querySelector('.navigation__list--js');
    navigationList.classList.toggle('navigation__list--visable');
});