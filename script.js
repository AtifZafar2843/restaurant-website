// Navigation
const navbar = document.querySelector('.navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.querySelector('.nav-menu');

// Navbar scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    document.body.classList.toggle('menu-open');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navMenu.classList.remove('active');
        document.body.classList.remove('menu-open');
    }
});

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
            navMenu.classList.remove('active');
            document.body.classList.remove('menu-open');
        }
    });
});

// Scroll to explore button
const scrollButton = document.querySelector('.hero-scroll');
if (scrollButton) {
    scrollButton.addEventListener('click', () => {
        const welcomeSection = document.querySelector('.welcome');
        welcomeSection.scrollIntoView({ behavior: 'smooth' });
    });
}

// Testimonial slider
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(index) {
    testimonials.forEach((testimonial, i) => {
        testimonial.style.opacity = i === index ? '1' : '0';
        testimonial.style.transform = i === index ? 'translateY(0)' : 'translateY(20px)';
        testimonial.style.display = i === index ? 'block' : 'none';
    });
}

// Initialize testimonial display
if (testimonials.length > 0) {
    showTestimonial(currentTestimonial);

    // Auto-rotate testimonials
    setInterval(() => {
        currentTestimonial = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(currentTestimonial);
    }, 5000);
}

// Animate elements on scroll
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.dish-card, .feature, .testimonial');
    
    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        
        if (elementTop < window.innerHeight && elementBottom > 0) {
            element.classList.add('animate');
        }
    });
};

window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Newsletter form submission
const newsletterForm = document.querySelector('.newsletter-form');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        // Here you would typically send the email to your server
        alert('Thank you for subscribing to our newsletter!');
        newsletterForm.reset();
    });
}

// Image hover effects
const dishCards = document.querySelectorAll('.dish-card');
dishCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
}); 