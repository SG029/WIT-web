// Get DOM elements
const burgerMenu = document.querySelector('.burger-menu');
const navbarMenu = document.querySelector('.navbar-menu');
const burgerIcon = document.querySelector('.burger-menu i');

// Set default burger icon
burgerIcon.classList.add('ri-menu-line');

// Toggle menu on burger click
burgerMenu.addEventListener('click', (e) => {
  e.stopPropagation();
  burgerMenu.classList.toggle('active');
  navbarMenu.classList.toggle('active');

  // Toggle icon
  if (burgerIcon.classList.contains('ri-menu-line')) {
    burgerIcon.classList.remove('ri-menu-line');
    burgerIcon.classList.add('ri-close-line');
  } else {
    burgerIcon.classList.remove('ri-close-line');
    burgerIcon.classList.add('ri-menu-line');
  }
});

// Close menu on clicking outside
document.addEventListener('click', (e) => {
  if (!burgerMenu.contains(e.target) && !navbarMenu.contains(e.target)) {
    closeMenu();
  }
});

// Close menu on nav link click
const navLinks = document.querySelectorAll('.navbar-menu a');
navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    closeMenu();

    const href = link.getAttribute('href');

    // Smooth scroll if link is within same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    }
  });
});

// Close menu on resize for desktop view
window.addEventListener('resize', () => {
  if (window.innerWidth > 768) {
    closeMenu();
  }
});

// Close menu function
function closeMenu() {
  burgerMenu.classList.remove('active');
  navbarMenu.classList.remove('active');
  burgerIcon.classList.remove('ri-close-line');
  burgerIcon.classList.add('ri-menu-line');
}

// Extra smooth scroll for same-page anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});
