document.addEventListener('DOMContentLoaded', function() {
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
});