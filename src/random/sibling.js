// Parent elements

const ul = document.querySelector(`ul`);

ul.parentElement.style.background = `red`;

// child elements
ul.children[0].style.color = 'white';

// siblings
console.log(ul.previousElementSibling);
ul.previousElementSibling.style.background = `blue`;