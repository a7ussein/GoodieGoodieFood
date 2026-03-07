/* ============================
   GOODIE GOODIE FOOD — Interactivity
   ============================ */

document.addEventListener('DOMContentLoaded', () => {
  // ---------- Smooth Scroll Navigation ----------
  document.querySelectorAll('[data-scroll]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const target = document.getElementById(btn.dataset.scroll);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        // Close mobile menu if open
        closeMobileMenu();
      }
    });
  });

  // ---------- Navbar Scroll Effect ----------
  const navbar = document.getElementById('navbar');
  let ticking = false;

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        if (window.scrollY > 50) {
          navbar.classList.add('scrolled');
        } else {
          navbar.classList.remove('scrolled');
        }
        ticking = false;
      });
      ticking = true;
    }
  }, { passive: true });

  // ---------- Mobile Menu Toggle ----------
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileNav = document.getElementById('mobileNav');

  mobileMenuBtn.addEventListener('click', () => {
    const isOpen = mobileNav.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      mobileNav.classList.add('open');
      mobileMenuBtn.classList.add('open');
    }
  });

  function closeMobileMenu() {
    mobileNav.classList.remove('open');
    mobileMenuBtn.classList.remove('open');
  }

  // ---------- Intersection Observer — Scroll Reveal ----------
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
        }
      });
    },
    { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    revealObserver.observe(el);
  });

  // ---------- Booking Form Submission ----------
  const bookingForm = document.getElementById('bookingForm');
  const formCard = document.getElementById('formCard');
  const formSuccess = document.getElementById('formSuccess');

  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Simple validation
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const date = document.getElementById('date').value;
    const eventType = document.getElementById('event').value;

    if (!name || !email || !date || !eventType) {
      return;
    }

    // Show success state
    formCard.style.display = 'none';
    formSuccess.style.display = 'block';

    // Re-trigger reveal animation
    formSuccess.classList.remove('revealed');
    requestAnimationFrame(() => {
      formSuccess.classList.add('revealed');
    });

    // Scroll to success message
    formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });

  // ---------- Set minimum date to today ----------
  const dateInput = document.getElementById('date');
  if (dateInput) {
    const today = new Date().toISOString().split('T')[0];
    dateInput.setAttribute('min', today);
  }
});
