function toggleAccessibilityMenu() {
  const menu = document.getElementById("accessibilityMenu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function increaseFont() {
  const currentSize = parseFloat(
    window.getComputedStyle(document.documentElement).fontSize
  );
  document.documentElement.style.fontSize = (currentSize + 2) + "px";
}

function decreaseFont() {
  const currentSize = parseFloat(
    window.getComputedStyle(document.documentElement).fontSize
  );
  document.documentElement.style.fontSize = (currentSize - 2) + "px";
}

function toggleContrast() {
  document.body.classList.toggle("high-contrast");
}
function toggleSpacing() {
  document.body.classList.toggle("text-spacing");
}

function toggleGray() {
  document.body.classList.toggle("grayscale-mode");
}
function resetAccessibility() {
  document.body.classList.remove(
    "highlight-links",
    "focus-outline",
    "text-spacing",
    "grayscale-mode",
    "high-contrast"
  );
  document.body.style.fontSize = "";
}
function toggleLinks() {
  document.body.classList.toggle("highlight-links");
}
function toggleFocus() {
  document.body.classList.toggle("focus-outline");
}

// סליידר המלצות
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

function showTestimonial(index) {
  testimonials.forEach(t => t.classList.remove("active"));
  testimonials[index].classList.add("active");
}

document.querySelector(".next-btn").addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showTestimonial(current);
});

document.querySelector(".prev-btn").addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showTestimonial(current);
});

showTestimonial(current);
