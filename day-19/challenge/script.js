const navToggle = document.querySelector('.nav__toggle');

navToggle.addEventListener('click', toggleMenu);

function toggleMenu(event) {
  event.preventDefault();
  navToggle.classList.toggle('active');
  const nav = document.querySelector('.nav');
  nav.classList.toggle('active');
}
