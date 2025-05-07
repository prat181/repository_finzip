// Hamburger menu for mobile
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');
menuBtn.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Tab functionality for features
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    tabContents.forEach(tc => tc.classList.remove('active'));
    document.getElementById(btn.dataset.tab).classList.add('active');
  });
});

// Animated reveal for service cards and compliance items
function revealOnScroll() {
  document.querySelectorAll('.animated-card').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
  document.querySelectorAll('.compliance-item').forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// Smooth scroll for anchor links and highlight nav
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    if (this.getAttribute('href') !== '#') {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if(target) {
        target.scrollIntoView({ behavior: 'smooth' });
        navLinks.classList.remove('active');
      }
    }
  });
});

// Highlight nav links on scroll
const sections = document.querySelectorAll('section, header');
window.addEventListener('scroll', function() {
  let scrollPos = window.scrollY + 100;
  sections.forEach(section => {
    if(section.id) {
      if(section.offsetTop <= scrollPos && (section.offsetTop + section.offsetHeight) > scrollPos) {
        document.querySelectorAll('.nav-links a').forEach(link => {
          link.classList.remove('active-link');
          if(link.getAttribute('href') === '#' + section.id) {
            link.classList.add('active-link');
          }
        });
      }
    }
  });
});

// Contact form: open mail client with filled info
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const mailto = `mailto:info@finzep.com?subject=Contact from ${encodeURIComponent(name)}&body=Name: ${encodeURIComponent(name)}%0AEmail: ${encodeURIComponent(email)}%0AMessage: ${encodeURIComponent(message)}`;
  window.location.href = mailto;
});

// FAQ accordion
document.querySelectorAll('.faq-question').forEach(q => {
  q.addEventListener('click', function() {
    const item = this.parentElement;
    item.classList.toggle('open');
  });
});
