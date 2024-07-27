const themes = ['brat', 'dark', 'blue'];
let currentTheme = localStorage.getItem('theme') || 'blue';

// Apply the theme as soon as the script is loaded
applyTheme(currentTheme);

document.addEventListener('DOMContentLoaded', (event) => {
    // Once the theme is applied, make the html element visible
    document.documentElement.style.visibility = 'visible';
});

function cycleTheme() {
    // Remove the current theme
    removeTheme(currentTheme);

    // Find the index of the current theme and get the next one
    const currentIndex = themes.indexOf(currentTheme);
    currentTheme = themes[(currentIndex + 1) % themes.length];

    // Save the new theme to localStorage
    localStorage.setItem('theme', currentTheme);

    // Apply the new theme
    applyTheme(currentTheme);
}

function applyTheme(theme) {
    // Add the new theme class to html, a, and button elements
    document.documentElement.classList.add(theme);
    document.querySelectorAll('a').forEach(link => {
        link.classList.add(theme);
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.add(theme);
    });
}

function removeTheme(theme) {
    // Remove the current theme class from html, a, and button elements
    document.documentElement.classList.remove(theme);
    document.querySelectorAll('a').forEach(link => {
        link.classList.remove(theme);
    });
    document.querySelectorAll('button').forEach(button => {
        button.classList.remove(theme);
    });
}
