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

const readmorebtn = document.querySelector(`.reveal-text-btn`);
const textP = document.querySelector(`.text-style`);

readmorebtn.addEventListener(`click`, () => {
    if (!textP.style.display || textP.style.display === "none")
        textP.style.display = "block";
    else
        textP.style.display = "none";
});