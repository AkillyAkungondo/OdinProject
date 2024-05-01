const container = document.querySelector('.container');
const gridBtn = document.getElementById('gridSize');

function createGrid(size) {
    container.innerHTML = ''; // Clear previous grid

    for (let i = 0; i < size; i++) {
        const row = document.createElement('div');
        row.classList.add('row');

        for (let j = 0; j < size; j++) {
            const cell = document.createElement('div');
            cell.classList.add('cell');
            cell.style.backgroundColor = 'white'; // Set initial color to white
            row.appendChild(cell);

            // Add event listener for hover effect
            cell.addEventListener('mouseenter', () => {
                const randomColor = getRandomColor();
                cell.style.backgroundColor = randomColor;
            });
        }

        container.appendChild(row);
    }
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
}

gridBtn.addEventListener('click', () => {
    let gridSize = prompt('Enter the number of squares per side for the new grid (up to 100):');
    gridSize = parseInt(gridSize);

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        createGrid(gridSize);
    } else {
        alert('Please enter a valid number between 1 and 100.');
    }
});

window.onload = function() {
    createGrid(16);
};
