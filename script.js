document.addEventListener('DOMContentLoaded', function() {
    // Get all menu tabs and categories
    const menuTabs = document.querySelectorAll('.menu-tab');
    const menuCategories = document.querySelectorAll('.menu-category');

    // Add click event listener to each tab
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
}); 