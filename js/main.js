/* ==============================
   ASC Consulting – main.js
   ============================== */

(function () {
  'use strict';

  /* ── Sticky nav shadow ───────────────── */
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', function () {
    navbar.classList.toggle('scrolled', window.scrollY > 10);
  }, { passive: true });

  /* ── Mobile hamburger ────────────────── */
  const hamburger = document.getElementById('hamburger');
  const navLinks  = document.getElementById('navLinks');

  hamburger.addEventListener('click', function () {
    const open = navLinks.classList.toggle('open');
    hamburger.classList.toggle('open', open);
    hamburger.setAttribute('aria-expanded', String(open));
  });

  navLinks.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      navLinks.classList.remove('open');
      hamburger.classList.remove('open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  /* ── Fade-up on scroll ───────────────── */
  const fadeEls = document.querySelectorAll(
    '.service-card, .why-item, .testimonial, .stat-box, .hero-card, .hero-content'
  );

  fadeEls.forEach(function (el) { el.classList.add('fade-up'); });

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    fadeEls.forEach(function (el) { observer.observe(el); });
  } else {
    /* Fallback for old browsers */
    fadeEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ── Stagger children inside grids ──── */
  document.querySelectorAll('.services-grid, .why-grid, .testimonials-grid, .stats-inner').forEach(function (grid) {
    Array.from(grid.children).forEach(function (child, i) {
      child.style.transitionDelay = (i * 80) + 'ms';
    });
  });

  /* ── Active nav link highlight ───────── */
  const sections = document.querySelectorAll('section[id], div[id]');
  const navAnchors = document.querySelectorAll('.nav-links a');

  function setActive() {
    let current = '';
    sections.forEach(function (sec) {
      if (window.scrollY >= sec.offsetTop - 120) {
        current = sec.id;
      }
    });
    navAnchors.forEach(function (a) {
      const href = a.getAttribute('href').replace('#', '');
      a.style.color = href === current ? 'var(--navy)' : '';
      a.style.fontWeight = href === current ? '500' : '';
    });
  }

  window.addEventListener('scroll', setActive, { passive: true });
  setActive();

})();
