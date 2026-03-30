// Rhythm of Shadow Studios — main.js

(function () {
  'use strict';

  var nav = document.getElementById('nav');
  var navLinks = document.querySelectorAll('.nav-links a');
  var sections = ['home', 'games', 'about'];

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

    for (var i = 0; i < sections.length; i++) {
      var id = sections[i];
      var el = document.getElementById(id);
      if (!el) continue;

      var top = el.offsetTop;
      var bottom = top + el.offsetHeight;
      var link = document.querySelector('.nav-links a[href="#' + id + '"]');
      if (!link) continue;

      if (scrollPos >= top && scrollPos < bottom) {
        for (var j = 0; j < navLinks.length; j++) {
          navLinks[j].classList.remove('active');
        }
        link.classList.add('active');
        break;
      }
    }
  }

  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

})();
