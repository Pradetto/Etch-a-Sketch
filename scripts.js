// console.log('<h1>Hello</h1>')

// const para = document.createAttribute('p')
// const test = document.querySelector('#test')
// test.textContent = 'Helllooo'


// creating grid
const container = document.querySelector('#container')
let size = 16 //prompt('What container size do you want 16-64?')

function grid(){

    for (let i = 0; i < size*size;i++) {
        let square = document.createElement('div');
        square.classList.add('box');
        // square.textContent = `${i}`;
        container.appendChild(square);
        square.addEventListener('mouseover', function (e) {
            e.target.style.background = 'black';
        });
    };
};
grid()

// function rgb(){

// }

// Button Controls Below:
const children = container.childNodes;

//Black Button:
const black = document.querySelector('#black');
black.addEventListener('click', () => {
    for (let i = 0; i < size*size;i++){
        children[i].addEventListener('mouseover', function(e){
            e.target.style.background = 'red';
        });
    };
});

//Reset Button:
const reset = document.querySelector('#reset');
reset.addEventListener('click', () => {
    children.forEach(child => {
        child.style.backgroundColor = 'white';
    });
});




// getting slider value

const sliderValue = document.querySelector('#slider');
const para = document.querySelector('p')
para.textContent = '16'
sliderValue.addEventListener('input', () => {
    para.textContent = `${sliderValue.value}`
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