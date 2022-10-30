// event delegation

/*
    it allows users to append a single event listener to a parent element
    that adds it to all its present and future desendencts
*/


document.querySelector(`#sports`).addEventListener(`click`, (e) => {
    console.log(`you have clicked on ${e.target.getAttribute(`id`)}`);

    if (e.target.matches(`li`))
    {
        e.target.style.backgroundColor = "red";
    }
});