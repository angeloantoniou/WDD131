// Select the theme dropdown element
const themeSelector = document.querySelector('#theme-select');

function changeTheme() {
    // Get the current selected value
    const selectedTheme = themeSelector.value;
    const body = document.body;
    const logo = document.querySelector('footer img');

    if (selectedTheme === 'dark') {
        body.classList.add('dark');
        logo.src = 'pictures/byui-logo-white.png'; // Make sure this image exists
    } else {
        body.classList.remove('dark');
        logo.src = 'pictures/byui-logo.png';
    }
}

// Add the event listener to the theme selector
themeSelector.addEventListener('change', changeTheme);
