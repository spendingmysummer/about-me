// Sapa Saya button functionality
const tombolSapa = document.getElementById('sapabutton');
tombolSapa.addEventListener('click', function() {
  alert('Hi, Nino Refayandy! Glad to meet you!');
});

// Dark Mode Toggle functionality
const darkModeToggle = document.getElementById('darkmodetoggle');
const body = document.body;
const cardProfile = document.querySelector('.card-profile'); // Get the card-profile element

// Function to apply dark mode styles
function applyDarkMode() {
  body.classList.add('dark-mode');
  cardProfile.classList.add('dark-mode-card'); // Add specific class for card
  darkModeToggle.classList.add('active'); // Indicate dark mode is active
}

// Function to remove dark mode styles
function removeDarkMode() {
  body.classList.remove('dark-mode');
  cardProfile.classList.remove('dark-mode-card'); // Remove specific class for card
  darkModeToggle.classList.remove('active'); // Indicate light mode is active
}

// Check for saved theme preference on load
document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.getItem('theme') === 'dark') {
    applyDarkMode();
  }
});

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  if (body.classList.contains('dark-mode')) {
    removeDarkMode();
    localStorage.setItem('theme', 'light');
  } else {
    applyDarkMode();
    localStorage.setItem('theme', 'dark');
  }
});
