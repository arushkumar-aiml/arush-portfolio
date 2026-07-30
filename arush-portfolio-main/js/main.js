// ============================================================
// ARUSH KUMAR — portfolio site behavior
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.nav-toggle');
  const menu = document.querySelector('.mobile-menu');
  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      menu.classList.toggle('open');
      toggle.setAttribute('aria-expanded', menu.classList.contains('open'));
    });
  }

  // Highlight active section link on scroll (single-page nav)
  const sections = document.querySelectorAll('main section[id]');
  const navAnchors = document.querySelectorAll('.nav-links a, .mobile-menu a');
  if ('IntersectionObserver' in window && sections.length) {
    const navIO = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          navAnchors.forEach(a => {
            a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id);
          });
        }
      });
    }, { rootMargin: '-40% 0px -50% 0px' });
    sections.forEach(s => navIO.observe(s));
  }

  // Scroll reveal
  const revealEls = document.querySelectorAll('[data-reveal]');
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
    }, { threshold: 0.12 });
    revealEls.forEach(el => io.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('in'));
  }

  // "Talking" avatar — speech bubble cycles real one-line highlights
  const bubble = document.getElementById('speech-text');
  if (bubble) {
    const lines = [
      'AI Engineer.',
      'Full-Stack Developer.',
      'Founder, Arush Labs.',
      'Open Source Contributor.',
      'Building AI products in public.'
    ];
    const orb = document.querySelector('.avatar-orb');
    let li = 0;
    function typeLine() {
      const line = lines[li];
      let i = 0;
      orb?.classList.add('talking');
      bubble.innerHTML = '<span class="cursor"></span>';
      const typer = setInterval(() => {
        i++;
        bubble.innerHTML = line.slice(0, i) + '<span class="cursor"></span>';
        if (i >= line.length) {
          clearInterval(typer);
          orb?.classList.remove('talking');
          setTimeout(() => {
            li = (li + 1) % lines.length;
            typeLine();
          }, 1600);
        }
      }, 45);
    }
    typeLine();
  }
});
