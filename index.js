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
const testimonials = document.querySelectorAll(".testimonial");
let current = 0;

// הצגת המלצה ספציפית
function showTestimonial(index){
    testimonials.forEach(t=>t.style.display="none");
    testimonials[index].style.display="block";
}

// פתיחת חלון
function openTestimonial(){
    document.getElementById("testModal").classList.add("show");
    document.getElementById("overlayTest").classList.add("show");
    current = 0;                // מתחילים מהראשון
    showTestimonial(current);   // מציגים את הראשון
}

// סגירה בלחיצה על כפתור X
document.querySelector(".close-testimonial").onclick = () =>{
    document.getElementById("testModal").classList.remove("show");
    document.getElementById("overlayTest").classList.remove("show");
};

// סגירה בלחיצה על הרקע
document.getElementById("overlayTest").onclick = () =>{
    document.getElementById("testModal").classList.remove("show");
    document.getElementById("overlayTest").classList.remove("show");
};

// מעבר בין המלצות
document.querySelector(".next-btn").onclick = ()=>{
    current = (current+1)%testimonials.length;
    showTestimonial(current);
}

document.querySelector(".prev-btn").onclick = ()=>{
    current = (current-1+testimonials.length)%testimonials.length;
    showTestimonial(current);
}


const menu = document.getElementById("menuContent");
const aboutBox = document.querySelector(".about-box");
const overlay = document.querySelector(".overlay");
const closeBtn = document.querySelector(".close-btn");

// פתיחה וסגירה של תפריט למעלה
function toggleMenu() {
    menu.classList.toggle("open");
}

// פתיחת הקופסה מתוך התפריט
function openBox() {
    aboutBox.classList.add("show");
    overlay.classList.add("show");
    menu.classList.remove("open"); // שהתפריט יסגר אחרי לחיצה
     toggleMenu();
}

// סגירה בלחיצה על כפתור X
closeBtn.addEventListener("click", closeModal);

// סגירה בלחיצה על המסך המטושטש
overlay.addEventListener("click", closeModal);

// פונקציית סגירה
function closeModal() {
    aboutBox.classList.remove("show");
    overlay.classList.remove("show");
}



function toggleMenu() {
    document.getElementById("menuContent").classList.toggle("show");
}

function openTestimonial() {
    // פותח את החלון
    document.getElementById("testModal").classList.add("show");
    document.getElementById("overlayTest").classList.add("show");

    // סוגר את התפריט
    toggleMenu();

    // מתחילים מההמלצה הראשונה
    current = 0;
    showTestimonial(current);
}
