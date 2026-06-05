// Mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const isOpen = navLinks.classList.toggle('open');
    navToggle.classList.toggle('active', isOpen);
    navToggle.setAttribute('aria-expanded', isOpen);
  });

  navLinks.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      navToggle.classList.remove('active');
      navToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// Header shadow on scroll
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
  if (!header) return;
  header.style.boxShadow = window.scrollY > 20
    ? '0 4px 24px rgba(0, 0, 0, 0.4)'
    : 'none';
});

// Brand tabs
const brandTabs = document.querySelectorAll('.brand-tab');
const brandPanels = document.querySelectorAll('.brands-panel');

brandTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = tab.dataset.tab;

    brandTabs.forEach((t) => t.classList.remove('active'));
    brandPanels.forEach((p) => p.classList.remove('active'));

    tab.classList.add('active');
    const panel = document.getElementById(`panel-${target}`);
    if (panel) panel.classList.add('active');
  });
});

// Fade-in on scroll
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  },
  { threshold: 0.08, rootMargin: '0px 0px -30px 0px' }
);

document.querySelectorAll(
  '.service-card, .review-card, .stat-card, .contact-item, .brand-card'
).forEach((el) => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.55s ease, transform 0.55s ease';
  observer.observe(el);
});
