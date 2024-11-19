const parent = document.querySelector("#container");
const parentWidth = 500;
parent.style.width = `${parentWidth}px`;
const square = 3;
const squareWidth = (parentWidth - (square * 3)) / square;


for (let i = 0; i < square; i++) {
    for (let j = 0; j < square; j++) {
        newSquare();
    }

}

function newSquare() {
    const child = document.createElement("div");
    child.className = "square";
    child.style.height = `${squareWidth}px`;
    child.style.width = `${squareWidth}px`;
    child.style.border = '1px solid black';
    parent.appendChild(child);   
}