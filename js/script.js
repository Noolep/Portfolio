const toggleCheckbox = document.getElementById("darkModeToggle");
const sliderIcon = document.querySelector(".slider .icon");

// Load theme dari localStorage
if (localStorage.getItem("theme") === "dark") {
  document.documentElement.setAttribute("data-theme", "light");
  toggleCheckbox.checked = true;
  sliderIcon.textContent = "☀️";
} else {
  document.documentElement.setAttribute("data-theme", "dark");
  toggleCheckbox.checked = false;
  sliderIcon.textContent = "🌙";
}

// Event toggle
toggleCheckbox.addEventListener("change", () => {
  if (toggleCheckbox.checked) {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "dark");
    sliderIcon.textContent = "☀️";
  } else {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "light");
    sliderIcon.textContent = "🌙";
  }
});

// Navbar shrink effect saat scroll
window.addEventListener("scroll", () => {
  const nav = document.querySelector("nav");
  if (window.scrollY > 50) {
    nav.classList.add("scrolled");
  } else {
    nav.classList.remove("scrolled");
  }
});

// Typing effect di Hero Subtitle
const typingTarget = document.getElementById("typing-text");
if (typingTarget) {
  const words = [
    "Web Developer ",
    "Cybersecurity Enthusiast",
    "Student Form SMKN 2 Indramayu "
  ];
  let wordIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
      typingTarget.textContent = currentWord.substring(0, charIndex--);
    } else {
      typingTarget.textContent = currentWord.substring(0, charIndex++);
    }

    if (!isDeleting && charIndex === currentWord.length) {
      isDeleting = true;
      setTimeout(typeEffect, 1000); // jeda sebelum hapus
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      wordIndex = (wordIndex + 1) % words.length;
      setTimeout(typeEffect, 500);
    } else {
      setTimeout(typeEffect, isDeleting ? 50 : 100);
    }
  }

  typeEffect();
}

