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
  const sectionDivs = document.querySelectorAll('.notes-content .md-section[id]');
  const sidebarLinks = document.querySelectorAll('.sidebar-nav a');

  if (sectionDivs.length && sidebarLinks.length) {
    // Helper: find the section closest to the top
    function highlightCurrentSection() {
      let currentId = null;
      let minDistance = Infinity;
      sectionDivs.forEach(div => {
        const rect = div.getBoundingClientRect();
        // Section is considered current if its top is above the middle of the viewport but not too far above
        const distance = Math.abs(rect.top - window.innerHeight * 0.18);
        if (rect.top < window.innerHeight * 0.5 && distance < minDistance) {
          minDistance = distance;
          currentId = div.id;
        }
      });
      if (currentId) {
        sidebarLinks.forEach(link => {
          link.classList.toggle('active', link.getAttribute('href') === `#${currentId}`);
        });
      }
    }
    window.addEventListener('scroll', highlightCurrentSection, { passive: true });
    // Initial highlight
    highlightCurrentSection();
  }

  /* ── Smooth-scroll for sidebar links & immediate active state ── */
  sidebarLinks.forEach(link => {
    link.addEventListener('click', e => {
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
        // Immediately mark clicked link as active
        sidebarLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');
      }
    });
  });

});
