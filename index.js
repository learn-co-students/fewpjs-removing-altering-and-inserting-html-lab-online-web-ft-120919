let mainElement = document.querySelector("main#main");
mainElement.remove();
let newHeader = document.createElement('h1');
newHeader.id="victory";
document.body.appendChild(newHeader);
newHeader.innerHTML= "Arthur is the champion .";
