// const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
// styleSwitcherToggle.addEventListener("click", () => {
//   document.querySelector(".style-switcher").classList.toggle("open");
// });

// // Hide style switcher on scroll
// window.addEventListener("scroll", () => {
//   if (document.querySelector(".style-switcher").classList.contains("open")) {
//     document.querySelector(".style-switcher").classList.remove("open");
//   }
// });
// // theme colors
// const alternateStyles = document.querySelectorAll(".alternate-style");
// function setActiveStyle(color) {
//   alternateStyles.forEach((style) => {
//     if (color === style.getAttribute("title")) {
//       style.removeAttribute("disabled");
//     } else {
//       style.setAttribute("disabled", "true");
//     }
//   });
// }
document.addEventListener("DOMContentLoaded", () => {
    const dayNight = document.querySelector(".day-night");
    const icon = dayNight.querySelector("i");
    const colorSwitcherIcon = document.querySelector('.color-switcher i');
    const colorOptions = document.querySelector('.color-options');
    const colorOptionsSpans = document.querySelectorAll('.color-option');
  
    // Load saved theme from localStorage or set default to dark
    let savedTheme = localStorage.getItem("theme");
    if (!savedTheme) {
        savedTheme = "dark"; // Default to dark theme
        localStorage.setItem("theme", "dark");
    }
  
    if (savedTheme === "dark") {
        document.body.classList.add("dark");
        icon.classList.remove("fa-toggle-on");
        icon.classList.add("fa-toggle-off");
    } else {
        document.body.classList.remove("dark");
        icon.classList.remove("fa-toggle-off");
        icon.classList.add("fa-toggle-on");
    }
  
    // Theme Toggle Functionality
    dayNight.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        const isDark = document.body.classList.contains("dark");
  
        if (isDark) {
            icon.classList.remove("fa-toggle-on");
            icon.classList.add("fa-toggle-off");
            localStorage.setItem("theme", "dark");
        } else {
            icon.classList.remove("fa-toggle-off");
            icon.classList.add("fa-toggle-on");
            localStorage.setItem("theme", "light");
        }
    });
  
    // Load saved color theme from localStorage
    const savedColor = localStorage.getItem("theme-color");
    if (savedColor) {
        document.documentElement.style.setProperty('--theme-color', savedColor);
    }
  
    // Toggle color options visibility
    colorSwitcherIcon.addEventListener("click", () => {
        colorOptions.style.display = colorOptions.style.display === "block" ? "none" : "block";
    });
  
    // Change theme color and save to localStorage
    colorOptionsSpans.forEach(span => {
        span.addEventListener("click", () => {
            const color = span.getAttribute("data-color");
            document.documentElement.style.setProperty("--theme-color", color);
            localStorage.setItem("theme-color", color);
            colorOptions.style.display = "none";
        });
    });
  });
  

