document.querySelector('main#main').remove();

let newHeader = document.createElement("h1");

document.body.appendChild(newHeader);

newHeader.id = 'victory';

newHeader.innerHTML = "Ben is the champion";