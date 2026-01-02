/* ============================================
   CUSTOM JAVASCRIPT per Blog Professionale
   Crea questo file in: assets/js/extended/custom.js
   ============================================ */

// ===== SCROLL PROGRESS BAR =====
(function() {
    // Crea la progress bar
    const progressBar = document.createElement('div');
    progressBar.id = 'progress-bar';
    document.body.prepend(progressBar);
    
    // Update on scroll
    window.addEventListener('scroll', () => {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight - windowHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / documentHeight) * 100;
        progressBar.style.width = progress + '%';
    });
})();

// ===== READING TIME PIÙ ACCURATO =====
(function() {
    const content = document.querySelector('.post-content');
    if (!content) return;
    
    const text = content.textContent;
    const wordCount = text.trim().split(/\s+/).length;
    const readingTime = Math.ceil(wordCount / 200); // 200 parole al minuto
    
    const metaDiv = document.querySelector('.post-meta');
    if (metaDiv) {
        const timeSpan = metaDiv.querySelector('[title*="minuti"]');
        if (timeSpan) {
            timeSpan.textContent = `${readingTime} min di lettura`;
        }
    }
})();

// ===== SMOOTH SCROLL PER ANCHOR LINKS =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href === '#') return;
        
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Update URL without jumping
            history.pushState(null, null, href);
        }
    });
});

// ===== COPY CODE BUTTON ENHANCEMENT =====
document.querySelectorAll('.highlight').forEach(block => {
    const button = block.querySelector('button');
    if (button) {
        const originalText = button.textContent;
        
        button.addEventListener('click', () => {
            button.textContent = '✓ Copiato!';
            button.style.color = '#10b981';
            
            setTimeout(() => {
                button.textContent = originalText;
                button.style.color = '';
            }, 2000);
        });
    }
});

// ===== TABLE OF CONTENTS ACTIVE LINK =====
(function() {
    const tocLinks = document.querySelectorAll('.toc a');
    if (tocLinks.length === 0) return;
    
    const headings = Array.from(document.querySelectorAll('h2, h3, h4'))
        .filter(h => h.id);
    
    function updateActiveTocLink() {
        let currentHeading = null;
        
        for (const heading of headings) {
            const rect = heading.getBoundingClientRect();
            if (rect.top <= 100) {
                currentHeading = heading;
            }
        }
        
        tocLinks.forEach(link => {
            link.style.color = '';
            link.style.fontWeight = '';
        });
        
        if (currentHeading) {
            const activeLink = document.querySelector(`.toc a[href="#${currentHeading.id}"]`);
            if (activeLink) {
                activeLink.style.color = 'var(--primary)';
                activeLink.style.fontWeight = '600';
            }
        }
    }
    
    window.addEventListener('scroll', updateActiveTocLink);
    updateActiveTocLink();
})();

// ===== EXTERNAL LINKS IN NEW TAB =====
document.querySelectorAll('.post-content a').forEach(link => {
    if (link.hostname !== window.location.hostname) {
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    }
});

// ===== IMAGE LAZY LOADING =====
if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.loading = 'lazy';
    });
}

// ===== SHARE BUTTON FUNCTIONALITY =====
(function() {
    const shareButtons = document.querySelectorAll('.share-buttons a');
    
    shareButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Se il browser supporta Web Share API
            if (navigator.share && button.classList.contains('share-native')) {
                e.preventDefault();
                navigator.share({
                    title: document.title,
                    url: window.location.href
                }).catch(() => {
                    // Fallback se l'utente cancella
                });
            }
        });
    });
})();

// ===== DARK MODE PREFERENCE PERSISTENCE =====
(function() {
    const themeToggle = document.getElementById('theme-toggle');
    if (!themeToggle) return;
    
    themeToggle.addEventListener('click', () => {
        setTimeout(() => {
            const currentTheme = document.body.className;
            localStorage.setItem('pref-theme', currentTheme);
        }, 50);
    });
})();

// ===== BACK TO TOP BUTTON =====
(function() {
    const backToTop = document.querySelector('#top-link');
    if (!backToTop) return;
    
    // Mostra/nascondi con fade
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            backToTop.style.opacity = '1';
            backToTop.style.visibility = 'visible';
        } else {
            backToTop.style.opacity = '0';
            backToTop.style.visibility = 'hidden';
        }
    });
})();

console.log('✨ Custom scripts loaded successfully');