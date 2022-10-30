// Event listeners

// elm.addEventListner(`event`, function);
// example

const btn3 = document.querySelector('.btn-3');
// click event
btn3.addEventListener(`click`, () => {
    console.log(`button 3 is clicked`);
});

// mouse over
const box1 = document.querySelector(`.box-1`);
const oldboxbf = box1.style.background;

box1.addEventListener(`mouseover`, () => {
    box1.style.background = 'black';
});

box1.addEventListener(`mouseout`, () => {
    box1.style.background = oldboxbf;   
});