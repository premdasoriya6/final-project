const hamburger = document.getElementById('hamburger');
const navContainer = document.getElementById('navContainer');
const body = document.body;

// Toggle menu when clicking hamburger
hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navContainer.classList.toggle('active');
  body.classList.toggle('menu-open');
});

// Close menu when clicking on a link
const menuLinks = document.querySelectorAll('.nav_links a');
menuLinks.forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navContainer.classList.remove('active');
    body.classList.remove('menu-open');
  });
});

// Close menu when clicking outside (on overlay)
document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && 
      !navContainer.contains(e.target) && 
      !e.target.closest('.mobile-header')) {
    hamburger.classList.remove('active');
    navContainer.classList.remove('active');
    body.classList.remove('menu-open');
  }
});