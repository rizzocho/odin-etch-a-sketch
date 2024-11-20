const parent = document.querySelector("#container");
const parentWidth = 500;
parent.style.width = `${parentWidth}px`;
const childAmount = 16;
const squareWidth = (parentWidth - (childAmount* 2)) / childAmount;


for (let i = 0; i < childAmount; i++) {
    for (let j = 0; j < childAmount; j++) {
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

const nodeList = document.querySelectorAll(".square");

let onHover = () => {
    console.log('hoover');
}

nodeList.forEach((item) => item.addEventListener("mouseenter", () => item.style.backgroundColor = 'black'));

