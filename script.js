const parent = document.querySelector("#container");
const parentWidth = 600;
parent.style.width = `${parentWidth}px`;
const button = document.querySelector("#input")
const squares = document.querySelectorAll(".square");

let childAmount = 16;

function newGrid(childAmount) {
    for (let i = 0; i < childAmount; i++) {
        for (let j = 0; j < childAmount; j++) {
            newSquare(childAmount);
        }
    }
}

button.addEventListener("click", () => {
    let input = prompt("Enter the grid size, up to 100");
    newGrid(input);
});

function newSquare(childAmount) {
    let squareWidth = (parentWidth - (childAmount* 2)) / childAmount;
    const child = document.createElement("div");
    child.className = "square";
    child.style.height = `${squareWidth}px`;
    child.style.width = `${squareWidth}px`;
    child.style.border = '1px solid black';
    parent.appendChild(child);
}

const nodeList = document.querySelectorAll(".square");

nodeList.forEach((item) => item.addEventListener("mouseenter", () => item.style.backgroundColor = 'black'));

newGrid(16);

// function clearGrid() {


// }