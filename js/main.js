/* ============================================
   Gallery Music Centre — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
});

/* --- Mobile Navigation --- */
function initMobileNav() {
  const toggle = document.querySelector('.nav__toggle');
  const links = document.querySelector('.nav__links');
  const overlay = document.querySelector('.nav__overlay');

  if (!toggle || !links) return;

  toggle.addEventListener('click', () => {
    const isOpen = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !isOpen);
    links.classList.toggle('open');
    if (overlay) overlay.classList.toggle('visible');
    document.body.style.overflow = isOpen ? '' : 'hidden';
  });

  if (overlay) {
    overlay.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
      overlay.classList.remove('visible');
      document.body.style.overflow = '';
    });
  }

  // Close on link click (mobile)
  links.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      if (window.innerWidth < 768) {
        toggle.setAttribute('aria-expanded', 'false');
        links.classList.remove('open');
        if (overlay) overlay.classList.remove('visible');
        document.body.style.overflow = '';
      }
    });
  });

  // Close on Escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && links.classList.contains('open')) {
      toggle.setAttribute('aria-expanded', 'false');
      links.classList.remove('open');
      if (overlay) overlay.classList.remove('visible');
      document.body.style.overflow = '';
      toggle.focus();
    }
  });
}

