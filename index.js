// Write your code here!
let element = document.createElement('div')
document.body.appendChild(element)

let ul = document.createElement('ul')
 
for (let i = 0; i < 3; i++) {
  let li = document.createElement('li')
  li.innerHTML = (i + 1).toString()
  ul.appendChild(li)
}
 
element.appendChild(ul)



//element.style.backgroundColor = '#27647B';
element.style.textAlign = 'center';
ul.style.textAlign = 'left'
ul.removeChild(ul.querySelector('li:nth-child(2)'))
ul.remove()

let elementMain = document.querySelector("main#main");
elementMain.remove();

let newHeader = document.createElement("h1");
//document.body.appendChild(newHeader);
newHeader.setAttribute("id", "victory");
newHeader.textContent = "Red Lion is the champion";