(function () {
  'use strict';

  var menuToggle = document.getElementById('menuToggle');
  var nav = document.getElementById('nav');
  var navLinks = nav ? nav.querySelectorAll('a') : [];

  // Menu mobile
  if (menuToggle && nav) {
    menuToggle.addEventListener('click', function () {
      nav.classList.toggle('is-open');
      menuToggle.setAttribute('aria-label', nav.classList.contains('is-open') ? 'Fechar menu' : 'Abrir menu');
    });

    navLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        nav.classList.remove('is-open');
      });
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('is-open') && !nav.contains(e.target) && !menuToggle.contains(e.target)) {
        nav.classList.remove('is-open');
      }
    });
  }

  // Smooth scroll para âncoras (reforço, o CSS já tem scroll-behavior: smooth)
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var href = this.getAttribute('href');
      if (href === '#') return;
      var target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Header com sombra ao rolar
  var header = document.querySelector('.header');
  if (header) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 50) {
        header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.2)';
      } else {
        header.style.boxShadow = 'none';
      }
    });
  }
})();
