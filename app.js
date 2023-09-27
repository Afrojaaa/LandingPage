const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const nav = document.querySelectorAll('#nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

Array.from(nav[0].children).forEach((ele) => {
  ele.addEventListener('click', () => {
    navLinks.classList.remove('show');
  });
});