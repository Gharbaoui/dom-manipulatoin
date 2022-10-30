window.addEventListener(`click`, () => {
    console.log(`window clicked`);
}, false);

document.addEventListener(`click`, () => {
    console.log(`document`);
}, false);

document.querySelector(`.box-3`).addEventListener(`click`, () => {
    console.log(`box-3`);
}, false);

document.querySelector(`.box-2`).addEventListener(`click`, () => {
    console.log(`box-2`);
}, false);

document.querySelector(`.box-1`).addEventListener(`click`, () => {
    console.log(`box-1`);
}, false);

document.querySelector(`.btn`).addEventListener(`click`, (e) => {
    console.log(`button clicked`);
    console.log(e);
}, false);

// event probagation is how event should accur order should event go up the dom tree or down by default it goes up
