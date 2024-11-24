const parent = document.querySelector("#container");
const parentWidth = 600;
parent.style.width = `${parentWidth}px`;
const button = document.querySelector("#input");
const black = document.querySelector("#black");
const erase = document.querySelector("#erase");
const random = document.querySelector("#random");
// const gradient = document.querySelector("#gradient");

let childAmount = 16;

function newGrid(childAmount) {
    for (let i = 0; i < childAmount; i++) {
        for (let j = 0; j < childAmount; j++) {
            newSquare(childAmount);
        }
    }
}

button.addEventListener("click", () => {
    clearGrid();
    let input = prompt("Enter the grid size, up to 100");
    if (input <= 100) {
        newGrid(input);
    } else {
        newGrid(100);
    }
});

function newSquare(childAmount) {
    let squareWidth = (parentWidth - (childAmount* 2)) / childAmount;
    const child = document.createElement("div");
    child.className = "square";
    child.style.height = `${squareWidth}px`;
    child.style.width = `${squareWidth}px`;
    child.style.border = '1px solid black';
    parent.appendChild(child);
    pointerBlack();
}

black.addEventListener("click", () => pointerBlack());
erase.addEventListener("click", () => pointerErase());
random.addEventListener("click", () => pointerRandom());
// gradient.addEventListener("click", () => pointerGradient());

function pointerBlack() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((item) => item.addEventListener("mouseenter", () => {
        itemStyles(item, 'gradient', 'black', 1);
    }));
}

function pointerErase() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((item) => item.addEventListener("mouseenter", () => {
        itemStyles(item, 'gradient', 'white', 1);
    }));
}

function pointerRandom() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((item) => item.addEventListener("mouseenter", () => {
        itemStyles(item, 'gradient', `rgb(${randomNumber()}, ${randomNumber()}, ${randomNumber()})`, 1)
    }));
}

// function pointerGradient() {
//     const squares = document.querySelectorAll(".square");
//     squares.forEach((item) => item.addEventListener("mouseenter", () => {
//         gradientCheck(item);
//         // console.log(item.classList.contains('gradient'));
//         // console.log(item.classList);
//         // if (item.classList.contains('gradient')) {
//         //     console.log(item.classList, 'yea');
//         //     item.classList = 'square gradient';
            
//         // //     console.log('grady');
//         // } else {
//         //     console.log(item.classList, 'no');
//         // }

//         // item.classList = 'square gradient';

//     }));
// }

newGrid(16);

function clearGrid() {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function randomNumber() {
    return Math.floor(Math.random() * 256)
}

function itemStyles(item, removeGradient, bgColor, opacity) {
    item.classList.remove(removeGradient);
    item.style.backgroundColor = bgColor;
    item.style.opacity = opacity;

}

// function gradientCheck() {
//     if (item.classList.contains("gradient")) {
//         console.log('no-grade');
//         item.classList = 'square gradient';
//         console.log('post', item.classList);
//     } else {
//         console.log('ok');
//     }
// }