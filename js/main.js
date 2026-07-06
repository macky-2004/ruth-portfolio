/**
 * MACKRINE RUTH PORTFOLIO — PREMIUM INTERACTION SYSTEM
 * Vanilla JS | Zero Dependencies | GPU Optimized Animations
 */

document.addEventListener('DOMContentLoaded', () => {
    initThemeBackgrounds();
    initTechFloaters();
    initMobileNav();
    initScrollReveal();
    initTypingEffect();
    initCustomCursor();
    initBackToTop();
    initWhatsAppFloat();
    initProjectFilters();
    initFaqAccordion();
});

/**
 * 1. Theme Backgrounds (Glow Blobs & Floating Tech Icons)
 */
function initThemeBackgrounds() {
    // Inject Glow Blobs Container
    const blobContainer = document.createElement('div');
    blobContainer.className = 'glow-blob-container';
    blobContainer.setAttribute('aria-hidden', 'true');
    blobContainer.innerHTML = `
        <div class="floating-blob blob-purple"></div>
        <div class="floating-blob blob-violet"></div>
        <div class="floating-blob blob-lavender"></div>
    `;
    document.body.prepend(blobContainer);

    // Dynamic Floating Tech Icons
    const techSymbols = ['</>', '{ }', 'AI', 'DB', '☁', '⚡', '[ ]', 'λ', 'CSS', 'JS', 'Git', 'UI/UX'];
    const maxIcons = window.innerWidth < 768 ? 6 : 14;

    const floaterContainer = document.createElement('div');
    floaterContainer.style.position = 'fixed';
    floaterContainer.style.inset = '0';
    floaterContainer.style.zIndex = '-7';
    floaterContainer.style.pointerEvents = 'none';
    floaterContainer.style.overflow = 'hidden';
    floaterContainer.setAttribute('aria-hidden', 'true');
    document.body.prepend(floaterContainer);

    function spawnIcon(initial = false) {
        if (floaterContainer.children.length >= maxIcons) return;

        const floater = document.createElement('div');
        floater.className = 'tech-floater';
        floater.innerText = techSymbols[Math.floor(Math.random() * techSymbols.length)];
        
        // Randomize dimensions & speeds
        const size = Math.random() * 0.8 + 0.8; // clamp between 0.8rem and 1.6rem
        const left = Math.random() * 100; // 0 to 100%
        const duration = Math.random() * 8 + 12; // 12s to 20s
        const opacity = Math.random() * 0.08 + 0.05; // clamp between 0.05 and 0.13

        floater.style.fontSize = `${size}rem`;
        floater.style.left = `${left}%`;
        floater.style.opacity = opacity;
        floater.style.animationDuration = `${duration}s`;
        
        // If initial load, start floaters at random heights
        if (initial) {
            const startY = Math.random() * 110 - 10; // -10vh to 100vh
            floater.style.animationDelay = `-${Math.random() * duration}s`;
        }

        floaterContainer.appendChild(floater);

        // Remove after animation completes
        setTimeout(() => {
            floater.remove();
            spawnIcon(false);
        }, duration * 1000);
    }

    // Initialize floaters
    for (let i = 0; i < maxIcons; i++) {
        spawnIcon(true);
    }
}

/**
 * 2. Mobile Menu Navigation & Frosted Header Scroll State
 */
function initMobileNav() {
    const header = document.querySelector('.site-header');
    const toggle = document.querySelector('.nav-toggle');
    const drawer = document.querySelector('.mobile-drawer');
    const closeBtn = document.querySelector('.drawer-close');
    const overlay = document.querySelector('.drawer-overlay');
    const drawerLinks = document.querySelectorAll('.drawer-link');

    if (!header) return;

    // Header frosted blur trigger on scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }, { passive: true });

    if (!toggle || !drawer) return;

    function openMenu() {
        drawer.classList.add('is-open');
        toggle.setAttribute('aria-expanded', 'true');
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden'; // Lock background scroll
    }

    function closeMenu() {
        drawer.classList.remove('is-open');
        toggle.setAttribute('aria-expanded', 'false');
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = ''; // Release background scroll
    }

    toggle.addEventListener('click', () => {
        const isOpen = drawer.classList.contains('is-open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    });

    if (closeBtn) closeBtn.addEventListener('click', closeMenu);
    if (overlay) overlay.addEventListener('click', closeMenu);

    drawerLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

/**
 * 3. Cinematic Hero Typing Animation
 */
function initTypingEffect() {
    const textEl = document.getElementById('typing-text');
    if (!textEl) return;

    const phrases = [
        'Turn visitors into customers',
        'Rank higher on Google',
        'Look professional online',
        'Load in under 2 seconds',
        'Work perfectly on mobile'
    ];

    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isDeleting) {
            textEl.textContent = currentPhrase.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 50; // Deleting is faster
        } else {
            textEl.textContent = currentPhrase.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentPhrase.length) {
            typingSpeed = 2000; // Pause at end of phrase
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            typingSpeed = 500; // Pause before starting new phrase
        }

        setTimeout(type, typingSpeed);
    }

    // Start typewriter loop
    setTimeout(type, 1000);
}

/**
 * 4. Custom Follow Cursor (Desktop Pointer Only)
 */
function initCustomCursor() {
    // Check if device supports hover interactions (fine pointer)
    const isDesktop = window.matchMedia('(pointer: fine)').matches;
    if (!isDesktop) return;

    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    // LERP lag speed (0.1 = slow/smooth follow, 1.0 = instant follow)
    const speed = 0.15;

    // Show cursor on initial movement
    window.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        if (cursor.style.display !== 'block') {
            cursor.style.display = 'block';
        }
    }, { passive: true });

    function animateCursor() {
        // Linear Interpolation for lag effect
        cursorX += (mouseX - cursorX) * speed;
        cursorY += (mouseY - cursorY) * speed;
        
        cursor.style.left = `${cursorX}px`;
        cursor.style.top = `${cursorY}px`;
        
        requestAnimationFrame(animateCursor);
    }
    requestAnimationFrame(animateCursor);

    // Hover interactive state overrides
    const clickables = document.querySelectorAll('a, button, input, select, textarea, summary, [role="button"], .filter-btn');
    clickables.forEach(item => {
        item.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
        item.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
    });
}

/**
 * 5. Back-to-Top Dynamic Circular Progress Button
 */
function initBackToTop() {
    const btn = document.createElement('button');
    btn.className = 'back-to-top';
    btn.setAttribute('aria-label', 'Back to top');
    btn.innerHTML = `
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="18 15 12 9 6 15"></polyline>
        </svg>
    `;
    document.body.appendChild(btn);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    }, { passive: true });

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * 6. Scroll Reveal Animations (IntersectionObserver)
 */
function initScrollReveal() {
    // Select all cards, sections, headers
    const elementsToReveal = document.querySelectorAll(
        '.problem-card, .timeline-card, .project-card, .diff-card, ' +
        '.skill-card, .progress-card, .soft-skill-card, .contact-method-card, ' +
        '.info-card, .resume-card, .faq-item, .section-title, .partnership-card, .story-grid, ' +
        '.inquiry-card-wrapper, .reveal-hidden, .reveal, .testimonial-section, .testimonial-card'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.02 // Trigger reveal as soon as it is visible (2%)
    };

    const observer = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                // Optional: stop observing once revealed
                obs.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(el => {
        el.classList.add('reveal-hidden');
        observer.observe(el);
    });
}

/**
 * 7. Project Filters (Work Page)
 */
function initProjectFilters() {
    const filterBar = document.querySelector('.filter-bar');
    if (!filterBar) return;

    const filterBtns = document.querySelectorAll('.filter-btn');
    const caseStudies = document.querySelectorAll('.case-study, .project-card'); // Handles both Work page and Home page grid

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active states
            filterBtns.forEach(b => {
                b.classList.remove('active');
                b.setAttribute('aria-pressed', 'false');
            });

            // Set active states
            btn.classList.add('active');
            btn.setAttribute('aria-pressed', 'true');

            const filterValue = btn.getAttribute('data-filter');

            caseStudies.forEach(study => {
                const category = study.getAttribute('data-category') || '';
                
                // Reset state
                study.style.transition = 'opacity 0.4s ease, transform 0.4s ease';

                if (filterValue === 'all' || category.includes(filterValue) || filterValue === category) {
                    study.style.display = 'block';
                    // Force repaint then fade in
                    setTimeout(() => {
                        study.style.opacity = '1';
                        study.style.transform = 'scale(1)';
                    }, 50);
                } else {
                    study.style.opacity = '0';
                    study.style.transform = 'scale(0.95)';
                    setTimeout(() => {
                        study.style.display = 'none';
                    }, 400);
                }
            });
        });
    });
}

/**
 * 8. FAQ Accordion Accessibility & Polish
 */
function initFaqAccordion() {
    const faqItems = document.querySelectorAll('.faq-item');
    if (!faqItems.length) return;

    // Ensure only one FAQ item is open at a time (Accordion behavior)
    faqItems.forEach(item => {
        const summary = item.querySelector('summary');
        
        summary.addEventListener('click', (e) => {
            if (item.hasAttribute('open')) return; // Allow natural closing
            
            // Close other FAQs
            faqItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.hasAttribute('open')) {
                    otherItem.removeAttribute('open');
                }
            });
        });
    });
}

/**
 * 9. WhatsApp Floating Button Dynamic Injection
 */
function initWhatsAppFloat() {
    // Prevent duplicate injections
    if (document.querySelector('.whatsapp-float')) return;

    const waFloat = document.createElement('a');
    waFloat.className = 'whatsapp-float';
    waFloat.href = 'https://wa.me/916381649243';
    waFloat.target = '_blank';
    waFloat.rel = 'noopener noreferrer';
    waFloat.setAttribute('aria-label', 'Chat on WhatsApp');
    waFloat.innerHTML = `
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.458 5.704 1.459h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
    `;
    document.body.appendChild(waFloat);
}

/**
 * 10. Tech Background Float Visuals
 */
function initTechFloaters() {
    const symbols = [
        'HTML5', 'CSS3', 'JS', 'Java', 'Python', 'Git', 'GitHub', 'VS Code', 'Database', 'Terminal',
        '</>', '{ }', '[ ]', 'λ', '01101', '10101', 'import', 'const', 'function', 'class', '=>'
    ];
    
    const container = document.createElement('div');
    container.className = 'tech-floater-container';
    container.setAttribute('aria-hidden', 'true');
    document.body.prepend(container);
    
    const count = 15;
    for (let i = 0; i < count; i++) {
        const floater = document.createElement('div');
        floater.className = 'tech-floater-item';
        floater.innerText = symbols[Math.floor(Math.random() * symbols.length)];
        
        const size = Math.random() * 2.5 + 1.8; // 1.8rem to 4.3rem
        const left = Math.random() * 90 + 5; 
        const top = Math.random() * 90 + 5; 
        const duration = Math.random() * 25 + 25; // 25s to 50s slow drift
        const delay = -Math.random() * duration;
        
        floater.style.fontSize = `${size}rem`;
        floater.style.left = `${left}%`;
        floater.style.top = `${top}%`;
        floater.style.animationDuration = `${duration}s`;
        floater.style.animationDelay = `${delay}s`;
        
        const depth = Math.floor(Math.random() * 3) + 1; 
        floater.classList.add(`depth-${depth}`);
        
        container.appendChild(floater);
    }
}
