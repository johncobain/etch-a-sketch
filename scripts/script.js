let board = document.querySelector('.container');
function square(blocks){
    while(board.firstChild){
        board.removeChild(board.firstChild);
    }
    for(let i=1; i<=blocks*blocks;i++){// sets the squares in the first load
        let pixel = document.createElement('div');
        pixel.classList.add('pixel')
        board.appendChild(pixel);
    }
    board.style.gridTemplateColumns = `repeat(${blocks}, 1fr)`;
    
    let pixels = document.querySelectorAll('.pixel');// paint the squares
    pixels.forEach(block => block.addEventListener('mouseover', (e) => e.target.style.backgroundColor = 'black'));
    
    let clear = document.querySelector('#clear');//clear the page
    clear.addEventListener('click', () => pixels.forEach(block => block.style.backgroundColor = 'white'));
}

square(16);

let size = document.querySelectorAll('.size');
size.forEach(newSize => newSize.addEventListener('click', (e) => {square(e.target.value)}));

