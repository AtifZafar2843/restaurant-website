document.addEventListener('DOMContentLoaded', function() {
    // Initialize GSAP ScrollTrigger
    gsap.registerPlugin(ScrollTrigger);

    // Menu Tab Functionality
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');

    menuTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // Remove active class from all tabs
            menuTabs.forEach(t => t.classList.remove('active', 'bg-[#1A1A1A]', 'text-white'));
            menuTabs.forEach(t => t.classList.add('bg-white/50', 'text-[#1A1A1A]'));

            // Add active class to clicked tab
            tab.classList.add('active', 'bg-[#1A1A1A]', 'text-white');
            tab.classList.remove('bg-white/50', 'text-[#1A1A1A]');

            // Show selected category
            const category = tab.getAttribute('data-category');
            menuCategories.forEach(cat => {
                cat.classList.add('hidden');
                if (cat.id === category) {
                    cat.classList.remove('hidden');
                }
            });
        });
    });

    // Gallery Lightbox Functionality
    window.openLightbox = function(element) {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const img = element.querySelector('img');
        
        lightboxImg.src = img.src;
        lightboxImg.alt = img.alt;
        lightbox.classList.remove('hidden');
        lightbox.classList.add('flex');
    };

    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
    };

    // Close lightbox when clicking outside the image
    document.getElementById('lightbox').addEventListener('click', function(e) {
        if (e.target === this) {
            closeLightbox();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });

    // Testimonials Carousel
    const carouselTrack = document.querySelector('.carousel-track');
    const scrollAmount = 358; // card width + gap

    window.scrollCarousel = function(direction) {
        if (direction === 'left') {
            carouselTrack.scrollBy({
                left: -scrollAmount,
                behavior: 'smooth'
            });
        } else {
            carouselTrack.scrollBy({
                left: scrollAmount,
                behavior: 'smooth'
            });
        }
    }

    // Hide scrollbar but keep functionality
    const style = document.createElement('style');
    style.textContent = `
        .scrollbar-hide {
            -ms-overflow-style: none;
            scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
            display: none;
        }
    `;
    document.head.appendChild(style);

    // Scroll-Triggered Animations
    // About Section Story Blocks
    gsap.utils.toArray('.animate-slide-in-left, .animate-slide-in-right').forEach((element, i) => {
        gsap.from(element, {
            scrollTrigger: {
                trigger: element,
                start: "top 80%",
                toggleActions: "play none none reverse"
            },
            x: element.classList.contains('animate-slide-in-left') ? -50 : 50,
            opacity: 0,
            duration: 1,
            ease: "power2.out"
        });
    });

    // Menu Items
    gsap.utils.toArray('.menu-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Gallery Items
    gsap.utils.toArray('.gallery-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Feature Cards
    gsap.utils.toArray('.feature-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Testimonial Cards
    gsap.utils.toArray('.carousel-item').forEach((item, i) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            x: i % 2 === 0 ? -30 : 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Form Fields
    gsap.utils.toArray('input, textarea, select').forEach((field, i) => {
        gsap.from(field, {
            scrollTrigger: {
                trigger: field,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 20,
            opacity: 0,
            duration: 0.5,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Contact Info Cards
    gsap.utils.toArray('.contact-info-card').forEach((card, i) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: "top 85%",
                toggleActions: "play none none reverse"
            },
            y: 30,
            opacity: 0,
            duration: 0.8,
            delay: i * 0.1,
            ease: "power2.out"
        });
    });

    // Continuous Floating Animation for Feature Cards
    gsap.utils.toArray('.float-animation').forEach(card => {
        gsap.to(card, {
            y: -10,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power1.inOut"
        });
    });
});