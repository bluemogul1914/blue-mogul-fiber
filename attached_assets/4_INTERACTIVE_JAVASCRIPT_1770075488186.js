// ===============================================
// BLUE MOGUL FIBER - INTERACTIVE JAVASCRIPT
// ===============================================

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

if (hamburger) {
    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
}

// Back to top button
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Navbar background on scroll
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Form validation (if not using HubSpot)
const forms = document.querySelectorAll('form:not(#hubspot-form-container form)');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        const requiredFields = form.querySelectorAll('[required]');
        let isValid = true;

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.style.borderColor = '#dc3545';
            } else {
                field.style.borderColor = '#ced4da';
            }
        });

        if (!isValid) {
            e.preventDefault();
            alert('Please fill out all required fields.');
        }
    });
});

// Plan selection tracking (for analytics)
document.querySelectorAll('.btn[href*="#contact"]').forEach(button => {
    button.addEventListener('click', function() {
        const planName = this.closest('.pricing-card, .bundle-card')
            ?.querySelector('.plan-name, h3')?.textContent;
        
        if (planName && typeof gtag === 'function') {
            gtag('event', 'plan_selected', {
                'event_category': 'Plans',
                'event_label': planName,
                'value': 1
            });
        }
    });
});

console.log('Blue Mogul Fiber - Website loaded successfully!');
