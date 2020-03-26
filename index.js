// Write your code here!
let main = document.getElementsByTagName('main')[0];
main.remove();

let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = 'You is the champion';