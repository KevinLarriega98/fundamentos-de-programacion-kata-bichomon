console.log(document.title);

const generationOneTitle = document.querySelector('#gen-1');
generationOneTitle.textContent = 'Generasión 1 Pokimon';

const generationOne = document.querySelector('#gen-1 + .infocard-list');
generationOne.style.backgroundColor = 'lightblue';

console.log(window.location.href);

console.log(window.location.hostname);

const imageNodes = document.querySelectorAll('img');
console.log(imageNodes);

imageNodes.forEach((image) => {
  image.src = 'https://media.giphy.com/media/2v170e71aanfi/giphy.gif';
});