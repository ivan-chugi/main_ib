document.addEventListener("DOMContentLoaded", function() {
    let timer;
    window.addEventListener("resize", function() {
        document.body.classList.remove("animated");
        clearTimeout(timer);
        timer = setTimeout(function() {
        document.body.classList.add("animated"); },
        100);
    });
});