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

            // Hide all categories
            menuCategories.forEach(category => category.classList.add('hidden'));

            // Show selected category
            const categoryId = tab.getAttribute('data-category');
            document.getElementById(categoryId).classList.remove('hidden');
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
        document.body.style.overflow = 'hidden';
    };

    window.closeLightbox = function() {
        const lightbox = document.getElementById('lightbox');
        lightbox.classList.add('hidden');
        lightbox.classList.remove('flex');
        document.body.style.overflow = '';
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
});