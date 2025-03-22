// smooth scsrolling

const lenis = new Lenis();
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);

// scroll to the top

const bottomToTopScroll = document.getElementById("bottomToTopScroll");

bottomToTopScroll.innerHTML = `
<div
    class="bottomToTop fadeIn w-10 cursor-pointer hidden h-10 fixed bottom-5 right-5 flex items-center justify-center rounded-lg border-2 border-[#262626]"><i class="fa-solid fa-arrow-up"></i>
</div>`

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

// form 

const fileInput = document.getElementById('file-upload');
const uploadBtn = document.getElementById('upload-btn');
const uploadArea = document.getElementById('upload-area');

uploadBtn.addEventListener('click', function(event) {
    event.stopPropagation(); 
    fileInput.click();
});

uploadArea.addEventListener('click', function() {
    fileInput.click();
});
