/**
 * TANAPUN PORTFOLIO — VANILLA JAVASCRIPT
 * Creative Media | Digital Art | Game Art | Game Development
 */

document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initPortfolioFilters();
  initPortfolioModal();
  initContactForm();
  initCopyButtons();
  initBackToTop();
  highlightActiveNav();
});

/* --------------------------------------------------------------------------
   1. NAVIGATION & MOBILE DRAWER
   -------------------------------------------------------------------------- */
function initNavbar() {
  const toggleBtn = document.querySelector('.navbar__toggle');
  const navDrawer = document.querySelector('.navbar__nav');
  const navbar = document.querySelector('.navbar');

  if (toggleBtn && navDrawer) {
    toggleBtn.addEventListener('click', () => {
      const isExpanded = toggleBtn.getAttribute('aria-expanded') === 'true';
      toggleBtn.setAttribute('aria-expanded', !isExpanded);
      navDrawer.classList.toggle('active');
    });

    // Close mobile drawer when clicking a nav link
    navDrawer.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navDrawer.classList.remove('active');
      });
    });

    // Close when clicking outside
    document.addEventListener('click', (e) => {
      if (!navbar.contains(e.target) && navDrawer.classList.contains('active')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navDrawer.classList.remove('active');
      }
    });

    // Close on Escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && navDrawer.classList.contains('active')) {
        toggleBtn.setAttribute('aria-expanded', 'false');
        navDrawer.classList.remove('active');
        toggleBtn.focus();
      }
    });
  }

  // Sticky header background sheen on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      navbar?.classList.add('navbar--scrolled');
    } else {
      navbar?.classList.remove('navbar--scrolled');
    }
  }, { passive: true });
}

/* --------------------------------------------------------------------------
   2. HIGHLIGHT CURRENT ACTIVE PAGE
   -------------------------------------------------------------------------- */
function highlightActiveNav() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.navbar__link');

  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '' && href === 'index.html')) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
}

/* --------------------------------------------------------------------------
   3. PORTFOLIO FILTERING
   -------------------------------------------------------------------------- */
function initPortfolioFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const portfolioCards = document.querySelectorAll('.portfolio-card');

  if (!filterButtons.length || !portfolioCards.length) return;

  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetFilter = btn.getAttribute('data-filter');

      // Update active button state
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      // Filter cards
      portfolioCards.forEach(card => {
        const cardCategory = card.getAttribute('data-category');
        if (targetFilter === 'all' || cardCategory === targetFilter) {
          card.classList.remove('hidden');
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

/* --------------------------------------------------------------------------
   4. PORTFOLIO MODAL / LIGHTBOX
   -------------------------------------------------------------------------- */
function initPortfolioModal() {
  const modal = document.getElementById('portfolioModal');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal__close');
  const modalImg = modal.querySelector('.modal__image');
  const modalTitle = modal.querySelector('.modal__title');
  const modalCategory = modal.querySelector('.modal__category');
  const modalDesc = modal.querySelector('.modal__description');
  const modalTools = modal.querySelector('.modal__tools-list');

  let lastActiveElement = null;

  // Open modal triggers
  const triggerElements = document.querySelectorAll('[data-open-modal]');
  triggerElements.forEach(trigger => {
    trigger.addEventListener('click', (e) => {
      e.preventDefault();
      const card = trigger.closest('.portfolio-card');
      if (!card) return;

      lastActiveElement = trigger;

      const title = card.getAttribute('data-title') || card.querySelector('.portfolio-card__title')?.textContent;
      const category = card.getAttribute('data-category-label') || card.querySelector('.portfolio-card__category')?.textContent;
      const desc = card.getAttribute('data-desc') || card.querySelector('.portfolio-card__desc')?.textContent;
      const imgSrc = card.querySelector('img')?.getAttribute('src');
      const imgAlt = card.querySelector('img')?.getAttribute('alt');
      const tools = card.getAttribute('data-tools') || '';

      if (modalTitle) modalTitle.textContent = title;
      if (modalCategory) modalCategory.textContent = category;
      if (modalDesc) modalDesc.textContent = desc;
      if (modalImg) {
        modalImg.setAttribute('src', imgSrc);
        modalImg.setAttribute('alt', imgAlt || title);
      }

      if (modalTools) {
        modalTools.innerHTML = '';
        if (tools) {
          tools.split(',').forEach(tool => {
            const span = document.createElement('span');
            span.className = 'badge badge--accent';
            span.textContent = tool.trim();
            modalTools.appendChild(span);
          });
        }
      }

      openModal(modal);
    });
  });

  // Close modal button
  closeBtn?.addEventListener('click', () => closeModal(modal, lastActiveElement));

  // Backdrop click
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal(modal, lastActiveElement);
    }
  });

  // ESC key
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal(modal, lastActiveElement);
    }
  });
}

function openModal(modal) {
  modal.classList.add('active');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  const closeBtn = modal.querySelector('.modal__close');
  closeBtn?.focus();
}

function closeModal(modal, returnFocusElement) {
  modal.classList.remove('active');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
  returnFocusElement?.focus();
}

/* --------------------------------------------------------------------------
   5. CONTACT FORM CLIENT-SIDE VALIDATION & FEEDBACK
   -------------------------------------------------------------------------- */
function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  const feedback = document.getElementById('formFeedback');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('senderName');
    const emailInput = document.getElementById('senderEmail');
    const subjectInput = document.getElementById('senderSubject');
    const messageInput = document.getElementById('senderMessage');

    const name = nameInput?.value.trim();
    const email = emailInput?.value.trim();
    const subject = subjectInput?.value.trim();
    const message = messageInput?.value.trim();

    // Basic email validation regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!name || !email || !subject || !message) {
      showFeedback(feedback, 'กรุณากรอกข้อมูลให้ครบทุกช่องก่อนส่งข้อความ', 'error');
      return;
    }

    if (!emailPattern.test(email)) {
      showFeedback(feedback, 'กรุณาระบุที่อยู่อีเมลให้ถูกต้องตามรูปแบบ (เช่น name@example.com)', 'error');
      return;
    }

    // Success simulation
    showFeedback(feedback, `ขอบคุณสำหรับข้อความครับคุณ ${name}! ระบบจำลองการส่งเรียบร้อยแล้ว ในการใช้งานจริงสามารถเชื่อมต่อกับ Netlify Forms หรือ Formspree ได้ทันที`, 'success');
    form.reset();
  });
}

function showFeedback(element, message, type) {
  if (!element) return;
  element.className = `form-feedback form-feedback--${type}`;
  element.textContent = message;
  element.style.display = 'block';

  element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/* --------------------------------------------------------------------------
   6. COPY TO CLIPBOARD HELPER
   -------------------------------------------------------------------------- */
function initCopyButtons() {
  const copyButtons = document.querySelectorAll('[data-copy-text]');
  copyButtons.forEach(btn => {
    btn.addEventListener('click', async () => {
      const textToCopy = btn.getAttribute('data-copy-text');
      if (!textToCopy) return;

      try {
        await navigator.clipboard.writeText(textToCopy);
        const originalText = btn.innerHTML;
        btn.innerHTML = '<span>คัดลอกแล้ว!</span>';
        setTimeout(() => {
          btn.innerHTML = originalText;
        }, 2200);
      } catch (err) {
        console.warn('Could not copy text: ', err);
      }
    });
  });
}

/* --------------------------------------------------------------------------
   7. BACK TO TOP
   -------------------------------------------------------------------------- */
function initBackToTop() {
  const backToTopBtn = document.querySelector('.back-to-top-btn');
  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
}

