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
  
    let colorFirst = document.querySelector('.color')
    let colors = document.querySelectorAll('.color');
    let inputColor = document.querySelector('input')
    let pixels = document.querySelectorAll('.pixel');// paint the squares
    let rainbow = 0;
    colors.forEach(color => color.addEventListener('click', (button) =>{
        console.log(button.target.id)
        if(button.target.id === 'colormode'){
            rainbow = 0
        }else if(button.target.id === 'rainbow'){
            rainbow = 1;
        }else if (button.target.id === 'erase'){
            rainbow = 2;
        }
    }));
  
    //inputColor.addEventListener('input', () => rainbow = 3);
    
    pixels.forEach(block => block.addEventListener('mouseover', (e) => {
        if(rainbow === 1){
            e.target.style.backgroundColor = `rgb(${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)}, ${Math.floor(Math.random()*256)})`;
        }else if(rainbow === 2){
            e.target.style.backgroundColor = 'white';
        }else if(rainbow === 0){
            e.target.style.backgroundColor = inputColor.value;
        }
    }));
    
    colors.forEach(button => button.classList.remove('selected'));
    colorFirst.classList.add('selected');

    let clear = document.querySelector('#clear');//clear the page
    clear.addEventListener('click', () => pixels.forEach(block => block.style.backgroundColor = 'white'));
    
    colors.forEach(button => button.addEventListener('click', () =>{
        colors.forEach(button => button.classList.remove('selected'));
        button.classList.add('selected');
    }));
}

square(16);

let size = document.querySelectorAll('.size');
size.forEach(newSize => newSize.addEventListener('click', (e) => {square(e.target.value)}));

