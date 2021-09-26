// Catch element
const leftSide = document.getElementById('leftside');
const canvas = document.getElementById('canvas');
const chooseColor = document.getElementById('chooseColor');
const colorMode = document.getElementById('colorMode');
const rainbowMode = document.getElementById('rainbowMode');
const eraser = document.getElementById('eraser');
const clear = document. getElementById('clear');


// Edit canvas
canvas.style.cssText = 'display: grid; grid-template-columns: repeat(64, 1fr);';


// Create Element canvas grid and append

let arrCanvas = []
let canvasPix = 64;


for(let i = 0; i < (canvasPix*canvasPix); i++){
    arrCanvas[i] = document.createElement('div');
    canvas.appendChild(arrCanvas[i]);
}


// Function to make side button functional
colorMode.addEventListener('click', ()=>{
    colorMode.firstChild.style.cssText = 'background-color: black; color: #ECECED;';
    rainbowMode.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    eraser.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    clear.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    arrCanvas.forEach (e => {
        e.addEventListener('mouseover', ()=>{
            e.style.cssText = 'background-color: black;';
        })
    });
});
rainbowMode.addEventListener('click', ()=>{
    rainbowMode.firstChild.style.cssText = 'background-color: black; color: #ECECED;';
    colorMode.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    eraser.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    clear.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    arrCanvas.forEach (e => {
        e.addEventListener('mouseover', ()=>{
            let rainbowColor = ['red','orange','yellow', 'green', 'blue', 'indigo','violet'];
            e.style.cssText = `background-color: ${rainbowColor[Math.floor(Math.random() * 6)]};`;
        })
    });
});
eraser.addEventListener('click', ()=>{
    eraser.firstChild.style.cssText = 'background-color: black; color: #ECECED;';
    rainbowMode.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    colorMode.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    clear.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    arrCanvas.forEach (e => {
        e.addEventListener('mouseover', ()=>{
            e.style.cssText = 'background-color: white;';
        })
    });
});
clear.addEventListener('click', ()=>{
    clear.firstChild.style.cssText = 'background-color: black; color: #ECECED;';
    rainbowMode.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    eraser.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    colorMode.firstChild.style.cssText = 'background-color: #ECECED; color: #333232';
    arrCanvas.forEach (e => {
        e.style.cssText = 'background-color: white;';
    });
});


// Function to make canvas colored everytime mouse hover


