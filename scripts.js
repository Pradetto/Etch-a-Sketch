// console.log('<h1>Hello</h1>')

// const para = document.createAttribute('p')
// const test = document.querySelector('#test')
// test.textContent = 'Helllooo'




// creating grid

// getting slider value

const sliderValue = document.querySelector('#slider');
const para = document.querySelector('span');
para.textContent = '16x16';
sliderValue.addEventListener('input', () => {
    para.textContent = `${sliderValue.value}x${sliderValue.value}`;
    grid(sliderValue.value);
});

const container = document.querySelector('#container');
// let size = sliderValue.value //prompt('What container size do you want 16-64?')
let gridSize = 600;
// console.log(gridSize/size);
// console.log(sliderValue.value);


function grid(size){
    container.innerHTML='';
    for (let i = 0; i < size*size;i++) {
        let square = document.createElement('div');
        square.classList.add('box');
        // square.textContent = `${i}`;
        square.style.width = (gridSize/(size * 1) - 2).toString() + 'px';
        square.style.height = (gridSize/(size * 1) - 2).toString() + 'px';
        container.appendChild(square);
        square.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });
    };
};
grid(16)


let size = 50;

// Button Controls Below:
const children = container.childNodes;

// Random Color:
function random(){
    randomColor='#'+Math.floor(Math.random()*16777215).toString(16);
    return randomColor
} 

const rgb = document.querySelector('#rgb');
rgb.addEventListener('click', () => {
    for (let i=0;i<size*size;i++){
        if (children[i] === undefined){
            continue;
        } else {
        children[i].addEventListener('mouseover', function(e){
            e.target.style.background = random();
            });
        };
    };
});

//Black Button:
const black = document.querySelector('#black');
black.addEventListener('click', () => {
    for (let i = 0; i < size*size;i++){
                if (children[i] === undefined){
            continue;
        } else {
        children[i].addEventListener('mouseover', function(e){
            e.target.style.background = 'black';
            });
        };
    };
});

//Reset Button:
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    children.forEach(child => {
        child.style.backgroundColor = 'white';
    });
});



















































// function getRandomColor(){
//     let letters = '0123456789ABCDEF';
//     let color = '#';
//     for (var i = 0; i < 6; i++) {
//         color += letters[Math.floor(Math.random() * 16)];
//       };
//     return color;
// };

// const rgb = document.querySelector('#rgb');
// rgb.addEventListener('click', function(){
//     let cell = container.childNodes;
//     for (let i = 0; i <= size*size; i++) {
//         cell[i].addEventListener('mouseover', function(e){
//             e.target.style.backgroundColor = getRandomColor();
//             console.log('should worked')
//         });
//     };
// });