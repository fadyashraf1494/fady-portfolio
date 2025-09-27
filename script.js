// Smooth scroll for navbar links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple contact form handler (demo only)
document.querySelector('.contact-form').addEventListener('submit', e => {
  e.preventDefault();
  alert('Thanks for reaching out, Fady! I will reply soon.');
});
