document.addEventListener("DOMContentLoaded", function () {
    // Menu hover effect
    const menuLinks = document.querySelectorAll(".menu a");
    menuLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "yellow";
        });
        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });

    // Star rating functionality
    const stars = document.querySelectorAll(".stars .star");

    stars.forEach((star, index) => {
        star.addEventListener("click", function () {
            updateStars(index);
        });
    });

    function updateStars(index) {
        stars.forEach((star, i) => {
            star.style.color = i <= index ? "gold" : "black";
        });
    }

    // Smooth slide-in effect for sections
    const sections = document.querySelectorAll("section");

    function revealSections() {
        sections.forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight - 100) {
                section.classList.add("visible");
            }
        });
    }

    window.addEventListener("scroll", revealSections);
    revealSections(); // Trigger on page load
});
