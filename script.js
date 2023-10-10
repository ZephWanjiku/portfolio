// Get references to the links and sections
const aboutLink = document.querySelector('a[href="#about"]');
const portfolioLink = document.querySelector('a[href="#portfolio"]');
const contactLink = document.querySelector('a[href="#contact"]');
const aboutSection = document.getElementById('about');
const portfolioSection = document.getElementById('portfolio');
const contactSection = document.getElementById('contact');

// Function to hide all sections
function hideAllSections() {
  aboutSection.style.display = 'none';
  portfolioSection.style.display = 'none';
  contactSection.style.display = 'none';
}

// Function to show a specific section
function showSection(section) {
  hideAllSections();
  section.style.display = 'block';
}

// Add click event listeners to the links
aboutLink.addEventListener('click', () => {
  showSection(aboutSection);
});

portfolioLink.addEventListener('click', () => {
  showSection(portfolioSection);
});

contactLink.addEventListener('click', () => {
  showSection(contactSection);
});

// Initially, show the About section
showSection(aboutSection);

// Function to show a specific section
// function showSection(section) {
//     hideAllSections();
//     if (section === aboutSection) {
//       section.style.display = 'block';
//     } else {
//       section.style.display = 'none';
//     }
//   }
  
