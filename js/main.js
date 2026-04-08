// Rhythm of Shadow Studios — main.js

(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = ['home', 'games', 'about', 'contact'];

  // --- Nav scroll state ---
  function onScroll() {
    if (window.scrollY > 20) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
    updateActiveNav();
  }

  // --- Active nav link based on scroll position ---
  function updateActiveNav() {
    var scrollPos = window.scrollY + 80;
    var active = null;

    for (var i = sections.length - 1; i >= 0; i--) {
      var el = document.getElementById(sections[i]);
      if (el && scrollPos >= el.offsetTop) {
        active = sections[i];
        break;
      }
    }

    for (var j = 0; j < navLinks.length; j++) {
      navLinks[j].classList.remove('active');
    }

    if (active) {
      var link = document.querySelector('.nav-links a[href="#' + active + '"]');
      if (link) { link.classList.add('active'); }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
