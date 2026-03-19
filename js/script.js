/* ─────────────────────────────────────────
   script.js — Study Notes Site
───────────────────────────────────────── */

document.addEventListener('DOMContentLoaded', () => {

  /* ── Stagger-reveal course cards on scroll ── */
  const cards = document.querySelectorAll('.course-card');
  if (cards.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, i) => {
          if (entry.isIntersecting) {
            entry.target.style.animation =
              `fadeUp 0.5s ${i * 60}ms cubic-bezier(0.25, 0.46, 0.45, 0.94) both`;
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    cards.forEach(card => {
      card.style.opacity = '0';
      observer.observe(card);
    });
  }

  /* ── Highlight active sidebar link on scroll ── */
  const headings = document.querySelectorAll('.notes-content h2[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

  if (headings.length && sidebarLinks.length) {
    const headingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            sidebarLinks.forEach(link => {
              link.classList.toggle('active', link.getAttribute('href') === `#${id}`);
            });
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );
    headings.forEach(h => headingObserver.observe(h));
  }

  /* ── Smooth-scroll for sidebar links ── */
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    });
  });

});
