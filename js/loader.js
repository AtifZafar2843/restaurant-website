// Create loader element
function createLoader() {
    const loader = document.createElement('div');
    loader.className = 'loader';
    loader.innerHTML = `
        <div class="loader-content">
            <div class="loader-logo">Delicious</div>
            <div class="loader-progress"></div>
        </div>
    `;
    return loader;
}

// Show loader
function showLoader() {
    const loader = createLoader();
    document.body.appendChild(loader);
}

// Hide loader with minimum display time
function hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
        // Minimum display time of 2 seconds
        setTimeout(() => {
            loader.classList.add('loader-hidden');
            loader.addEventListener('transitionend', () => {
                if (loader.parentNode) {
                    loader.parentNode.removeChild(loader);
                }
            });
        }, 2000); // 2 seconds minimum display time
    }
}

// Initial page load
window.addEventListener('load', () => {
    hideLoader();
});

// Show loader before page unload
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('a[href]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only add loader for internal links
            if (link.hostname === window.location.hostname) {
                showLoader();
            }
        });
    });
}); 