(function () {
    'use strict';
  
    var menuToggle = document.getElementById('menuToggle');
    var nav = document.getElementById('nav');
    var navLinks = nav ? nav.querySelectorAll('a') : [];
  
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
  
    var header = document.querySelector('.header');
    if (header) {
      window.addEventListener('scroll', function () {
        if (window.scrollY > 50) {
          header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.25)';
          header.style.background = 'rgba(3, 25, 62, 0.98)';
        } else {
          header.style.boxShadow = 'none';
          header.style.background = 'rgba(3, 25, 62, 0.92)';
        }
      });
    }
  
    var observerOptions = {
      threshold: 0.15,
      rootMargin: '0px 0px -50px 0px'
    };
  
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);
  
    var animateElements = document.querySelectorAll('.service-card, .step, .about-card, .stat, .contact-method, .contact-card');
    animateElements.forEach(function (el) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  
    var style = document.createElement('style');
    style.textContent = `
      .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
      }
      .service-card:nth-child(1) { transition-delay: 0.1s; }
      .service-card:nth-child(2) { transition-delay: 0.2s; }
      .service-card:nth-child(3) { transition-delay: 0.3s; }
      .step:nth-child(1) { transition-delay: 0.1s; }
      .step:nth-child(2) { transition-delay: 0.25s; }
      .step:nth-child(3) { transition-delay: 0.4s; }
    `;
    document.head.appendChild(style);
  })();
  