const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

document.addEventListener("DOMContentLoaded", function () {
    const scrollToTopBtn = document.querySelector(".bottomToTop");
    
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollToTopBtn.style.display = "flex";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });
    
    scrollToTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

const closeNav = document.getElementById("closeNav")
const openNav = document.getElementById("openNav")
const resNav = document.getElementById("resNav")

openNav.addEventListener('click', () => {
    resNav.style.width = "100%"
})
closeNav.addEventListener('click', () => {
    resNav.style.width = "0%"
})