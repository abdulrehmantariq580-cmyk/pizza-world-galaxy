document.addEventListener('DOMContentLoaded', () => {
    // Select Elements
    const hamburger = document.querySelector('.hamburger');
    const mobileSidebar = document.getElementById('mobileSidebar');
    const closeSidebar = document.getElementById('closeSidebar');
    const sidebarOverlay = document.getElementById('sidebarOverlay');

    // Function to open the mobile menu
    function openMenu() {
        mobileSidebar.classList.add('active');
        sidebarOverlay.classList.add('active');
        // Prevent body from scrolling while menu is open
        document.body.style.overflow = 'hidden'; 
    }

    // Function to close the mobile menu
    function closeMenu() {
        mobileSidebar.classList.remove('active');
        sidebarOverlay.classList.remove('active');
        // Restore body scrolling
        document.body.style.overflow = ''; 
    }

    // Event Listeners
    hamburger.addEventListener('click', openMenu);
    closeSidebar.addEventListener('click', closeMenu);
    sidebarOverlay.addEventListener('click', closeMenu);

    // Optional: Close menu automatically when clicking a link inside it
    const sidebarLinks = document.querySelectorAll('.sidebar-links a');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
});
