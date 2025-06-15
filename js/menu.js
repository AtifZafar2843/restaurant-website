document.addEventListener('DOMContentLoaded', () => {
    const tabButtons = document.querySelectorAll('.tab-btn');
    const menuSections = document.querySelectorAll('.menu-section');

    // Function to switch categories
    function switchCategory(category) {
        // Remove active class from all buttons and sections
        tabButtons.forEach(btn => btn.classList.remove('active'));
        menuSections.forEach(section => section.classList.remove('active'));

        // Add active class to selected button and section
        const selectedButton = document.querySelector(`[data-category="${category}"]`);
        const selectedSection = document.getElementById(category);

        if (selectedButton && selectedSection) {
            selectedButton.classList.add('active');
            selectedSection.classList.add('active');
        }
    }

    // Add click event to all tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            switchCategory(category);
        });
    });

    // Initialize with first category
    switchCategory('starters');
}); 