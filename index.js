// Write your code here!
let element = document.createElement('div');
document.body.appendChild(element);

let ul = doculment.createElement('ul');

for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}

let ement = document.querySelector('p#greeting');
ement.innerHTML = 'Hello, DOM!'

let header = document.getElementsById('div#header');
header.innerHTML = "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";

const testVar = 'hi'

document.querySelector('main#main').remove();

const newHeader = document.createElement('hi');
newHeader.id = 'victory'
newHeader.innerHTML = 'Flatiron School is the champion!';
newHeader.className = 'victory';
