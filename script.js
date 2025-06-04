// script.js

// Typewriter Effect
const typedText = document.querySelector('.typed-text');
const textArray = ["Computer Science student", "Web Developer", "Tech Enthusiast"];
let arrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[arrayIndex].length) {
    typedText.textContent += textArray[arrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
}

function erase() {
  if (charIndex > 0) {
    typedText.textContent = textArray[arrayIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    arrayIndex = (arrayIndex + 1) % textArray.length;
    setTimeout(type, 1000);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  if (textArray.length) setTimeout(type, 1000);
});

// Modal popup for profile image
const profileImage = document.getElementById('profileImage');
const bioModal = document.getElementById('bioModal');
const closeModal = document.getElementById('closeModal');

profileImage.addEventListener('click', () => {
  bioModal.style.display = "block";
});

closeModal.addEventListener('click', () => {
  bioModal.style.display = "none";
});

window.addEventListener('click', (e) => {
  if (e.target === bioModal) {
    bioModal.style.display = "none";
  }
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });

     // Dark mode toggle
  document.getElementById("themeToggle").addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
  });

  
