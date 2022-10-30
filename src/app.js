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

// const itemList = document.querySelectorAll(`.list-items`);
// for (let i = 0; i < itemList.length; ++i)
// {
//     itemList[i].style.color = `blue`;
// }

// creating elements
const ul = document.querySelector('ul');
const li = document.createElement(`li`);
li.innerText = `new txt js`;
ul.append(li);
li.setAttribute(`class`, `list-items`);

setTimeout(() => {
    li.removeAttribute(`class`);
}, 1000);

setTimeout(() => {
    li.classList.add(`list-items`);
    li.classList.add(`text-background`);
}, 2000);

setTimeout(() => {
    li.classList.add(`list-items`);
    li.classList.remove(`text-background`);
}, 3000);

console.log(li.classList.contains(`text-background`));