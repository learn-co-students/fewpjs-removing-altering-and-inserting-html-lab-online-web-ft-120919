// Write your code here!
let main = document.querySelector('main')
main.parentNode.removeChild(main)
let newHeader = document.createElement('h1');
newHeader.setAttribute('id', 'victory')
document.body.appendChild(newHeader);
newHeader.innerHTML = "YOUR-NAME is the champion"