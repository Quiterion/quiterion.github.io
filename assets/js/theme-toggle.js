// Theme toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Check for saved theme preference or default to 'light'
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);

    // Update theme toggle icon
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('.icon');
        const basePath = themeToggle.getAttribute('data-base-path') || '/assets/images/icons';
        if (theme === 'light') {
            icon.src = `${basePath}/moon.svg`;
        } else {
            icon.src = `${basePath}/sun.svg`;
        }
    }

    updateThemeIcon(currentTheme);

    themeToggle.addEventListener('click', () => {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
});
