// menu-toggle.js
document.addEventListener('DOMContentLoaded', function () {
  const toggleButton = document.querySelector('.central-menu-toggle');
  const menu = document.querySelector('.central-menu');

  toggleButton.addEventListener('click', function () {
    menu.classList.toggle('show');
  });
});
