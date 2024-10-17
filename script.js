const INITIAL_NUM_SQRS = 16;
const GRID_LENGTH = 525;
let squareLength = setSqrLength(INITIAL_NUM_SQRS);
let numSqrs = INITIAL_NUM_SQRS;

function setSqrLength(num) {
    return GRID_LENGTH/num;
}

function generateGrid(length) {
    const size = length*length;
    const grid = document.querySelector('#grid');

    squareLength = setSqrLength(length);
    grid.style.width = `${GRID_LENGTH}px`;
    grid.style.height = `${GRID_LENGTH}px`;

    for (let i = 0; i < size; i++) {
        addSquare(grid);
    }
}

function addSquare(grid) {
    const square = document.createElement('div');
        square.classList.add('square');
        square.style.width = `${squareLength}px`;
        square.style.height = `${squareLength}px`;

        square.addEventListener('mouseenter', mouseOverSquare);
        grid.appendChild(square);
        console.log("add square");
}

function mouseOverSquare(event) {
    const square = event.target;
    if (square.classList.contains('coloured')) {

        if (Number(square.style.opacity) < 1) {
            square.style.opacity = Number(square.style.opacity) + 0.1;

        }

    } else {
        square.classList.add('coloured');
        square.style.backgroundColor = getRainbowColor();
        square.style.opacity = 0.1;
    }
}

function getRainbowColor() {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
    const randInt = Math.floor(Math.random() * ((colors.length - 1)));
    return colors[randInt];
}

function updateGrid() {
    let newNumSqrs = prompt('Update number of squares in a row:');
    numSqrs = newNumSqrs;
    document.querySelector('#grid').innerHTML = '';
    if (newNumSqrs > 100) {
        alert("Max squares reached. 100x100 grid generated.")
        newNumSqrs = 100;
    }
    generateGrid(newNumSqrs);
}

function clearGrid() {
    document.querySelector('#grid').innerHTML = '';
    generateGrid(numSqrs);
}

function resetGrid() {
    document.querySelector('#grid').innerHTML = '';
    numSqrs = INITIAL_NUM_SQRS;
    generateGrid(INITIAL_NUM_SQRS);

}

function setupButtons() {
    const btnGenGrid = document.querySelector('#btn');
    btnGenGrid.addEventListener('click', updateGrid);

    const btnClear = document.querySelector('#clear');
    btnClear.addEventListener('click', clearGrid);

    const btnReset = document.querySelector('#reset');
    btnReset.addEventListener('click', resetGrid);

}

setupButtons();
console.log('here');
generateGrid(INITIAL_NUM_SQRS);
console.log('end');
