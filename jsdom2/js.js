// Catch
const container = document.getElementById('container');
const button = document.getElementById('button');

// Create Element n Node
const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'Hello everybody, I am text content';

const pText = document.createElement('p');
pText.textContent = 'Hi I am red';
pText.style.cssText = 'color: red;';

const h3Blue = document.createElement('h3');
h3Blue.textContent = 'I am a blue H3';
h3Blue.style.cssText = 'color: blue;';

const divBlack = document.createElement('div');
divBlack.style.cssText = 'border: 1px solid black; background-color: pink;';

const divH1 = document.createElement('h1');
divH1.textContent = 'I am a div';
divBlack.appendChild(divH1);

const divP = document.createElement('p');
divP.textContent = 'Me too';
divBlack.appendChild(divP);

// Append to DOM
container.appendChild(content);
container.appendChild(pText);
container.appendChild(h3Blue);
container.appendChild(divBlack);

// Event Listener
button.addEventListener('click', e =>{
    e.target.style.background = 'blue';
    console.log(e.target);
})
