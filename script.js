// Dark Mode Toggle
const toggle = document.getElementById("darkToggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");

    toggle.textContent = document.body.classList.contains("light")
        ? "🌞"
        : "🌙";
});

// Smooth Scroll Animation
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

console.log("Resume Website Loaded Successfully!");
