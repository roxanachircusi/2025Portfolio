// menu-toggle.js
const toggleButton = document.querySelector('.central-menu-toggle');
const menu = document.querySelector('.central-menu');

toggleButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});
