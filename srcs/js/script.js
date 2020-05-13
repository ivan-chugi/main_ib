const button_about = document.querySelector("#about");
const button_projects = document.querySelector("#projects");
const slide_about = document.querySelector(".slide-about");
const slide_projects = document.querySelector(".slide-projects");

button_projects.addEventListener("change", function() {
    if (button_projects.checked) {
        slide_about.style.transform = "translateX(-100%)";
        slide_projects.style.transform = "translateX(-100%)";
    }
});

button_about.addEventListener("change", function() {
    if (button_about.checked) {
        slide_about.style.transform = "translateX(-100%)";
        slide_projects.style.transform = "translateX(100%)";
    }
});