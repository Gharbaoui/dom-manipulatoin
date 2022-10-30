// How to select element

const headTitle = document.getElementById(`main-heading`);
// console.log(headTitle);
// How to get all elements that match a class name

const items = document.getElementsByClassName(`list-items`);
// console.log(items[0]);

const liTags = document.getElementsByTagName(`li`);
// console.log(liTags);


// it will return the first match
const getByAnything = document.querySelector(`div`);
// console.log(getByAnything);

const getByAnythingAll = document.querySelectorAll(`div`);
// console.log(getByAnythingAll);

const title = document.querySelector(`#main-heading`);
title.style.color = `red`;