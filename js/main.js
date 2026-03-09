/* ============================================
   Gallery Music Centre — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFormValidation();
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

/* --- Form Validation --- */
function initFormValidation() {
  const form = document.getElementById('enrolment-form');
  if (!form) return;

  const thankYou = document.querySelector('.thank-you');
  const submitBtn = form.querySelector('button[type="submit"]');

  // Real-time validation on blur
  form.querySelectorAll('input[required], select[required]').forEach(field => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.classList.contains('error')) {
        validateField(field);
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const requiredFields = form.querySelectorAll('input[required], select[required]');
    let isValid = true;

    requiredFields.forEach(field => {
      if (!validateField(field)) {
        isValid = false;
      }
    });

    if (!isValid) {
      // Focus the first error field
      const firstError = form.querySelector('.error');
      if (firstError && typeof firstError.focus === 'function') {
        firstError.focus();
      }
      return;
    }

    // Build mailto body from form data
    const formData = new FormData(form);
    let body = '';
    for (const [key, value] of formData.entries()) {
      if (value) {
        const label = key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase());
        body += `${label}: ${value}\n`;
      }
    }

    const subject = encodeURIComponent('New Enrolment - ' + (formData.get('parent_name') || formData.get('contact_email') || 'Gallery Music'));
    const mailtoBody = encodeURIComponent(body);
    const mailto = `mailto:administration@gallerymusic.org?subject=${subject}&body=${mailtoBody}`;

    // Open mailto
    window.location.href = mailto;

    // Show thank you message
    form.style.display = 'none';
    if (thankYou) thankYou.classList.add('visible');
  });
}

function validateField(field) {
  const errorMsg = field.parentElement.querySelector('.error-message');

  // Reset
  field.classList.remove('error');
  if (errorMsg) errorMsg.style.display = 'none';

  // Check required
  if (field.required && !field.value.trim()) {
    field.classList.add('error');
    if (errorMsg) {
      errorMsg.textContent = 'This field is required';
      errorMsg.style.display = 'block';
    }
    return false;
  }

  // Check email format
  if (field.type === 'email' && field.value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(field.value)) {
      field.classList.add('error');
      if (errorMsg) {
        errorMsg.textContent = 'Please enter a valid email address';
        errorMsg.style.display = 'block';
      }
      return false;
    }
  }

  return true;
}
