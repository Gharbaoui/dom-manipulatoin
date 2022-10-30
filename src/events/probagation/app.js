window.addEventListener(`click`, () => {
    console.log(`window clicked`);
}, true);

document.addEventListener(`click`, () => {
    console.log(`document`);
}, true);

document.querySelector(`.box-3`).addEventListener(`click`, () => {
    console.log(`box-3`);
}, true);

document.querySelector(`.box-2`).addEventListener(`click`, (e) => {

    e.stopPropagation();
    console.log(`box-2`);
}, true);

document.querySelector(`.box-1`).addEventListener(`click`, () => {
    console.log(`box-1`);
}, true);

document.querySelector(`.btn`).addEventListener(`click`, (e) => {
    console.log(`button clicked`);
    console.log(e);
}, true);

// event probagation is how event should accur order should event go up the dom tree or down by default it goes up
// false is going up the dom tree 
// true is going from top to button
// we can stop it at some point if we want to