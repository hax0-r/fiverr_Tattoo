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

// scroll to the top

const notificationPopup = document.getElementById("notificationPopup");

notificationPopup.innerHTML = `
    <div id="success-message"
        class="mt-6 fixed bg-white px-5 py-3 hidden rounded-lg border top-0 right-5 w-80 text-green-600 font-semibold ">
        🎉 Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet.
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

document.addEventListener("DOMContentLoaded", function () {
    const fileInput = document.getElementById('file-upload');
    const uploadBtn = document.getElementById('upload-btn');
    const uploadArea = document.getElementById('upload-area');
    const previewImg = document.getElementById('preview-img');
    const form = document.querySelector("form");
    const emailInput = document.querySelector("input[name='email']");
    const imageInputHidden = document.createElement("input");
    imageInputHidden.type = "hidden";
    imageInputHidden.name = "image_url";
    form.appendChild(imageInputHidden);

    let imageFile = null;

    // ✅ reCAPTCHA global callback
    window.onloadCallback = function () {
        grecaptcha.render('recaptcha', {
            'sitekey': '6LfDDVgrAAAAAB7GfG2NZtegHCBuIiw7N3Fop34z' // replace with your real site key
        });
    };

    // Trigger file input on click
    uploadBtn.addEventListener('click', function (e) {
        e.stopPropagation();
        fileInput.click();
    });

    uploadArea.addEventListener('click', function () {
        fileInput.click();
    });

    // Preview selected image
    fileInput.addEventListener('change', function (event) {
        const file = event.target.files[0];
        if (file && file.type.startsWith('image/')) {
            const reader = new FileReader();
            reader.onload = function (e) {
                previewImg.src = e.target.result;
                previewImg.classList.remove('hidden');
            };
            reader.readAsDataURL(file);
            imageFile = file;
        }
    });

    // Form submission
    form.addEventListener("submit", async function (e) {
        e.preventDefault(); // Always prevent default first

        // reCAPTCHA check
        const recaptchaResponse = grecaptcha.getResponse();
        if (!recaptchaResponse) {
            alert("Bitte bestätigen Sie, dass Sie kein Roboter sind.");
            return;
        }

        const botcheck = form.querySelector("input[name='botcheck']").value;
        if (botcheck !== "") {
            alert("Bot erkannt.");
            return;
        }

        const message = form.querySelector("input[name='Bild_hochladen']").value;
        const linkRegex = /(?:https?:\/\/|www\.)\S+/gi;
        if (linkRegex.test(message)) {
            alert("Bitte keine Links in die Nachricht einfügen.");
            return;
        }

        const emails = form.querySelector("input[name='email']").value;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emails)) {
            alert("Bitte geben Sie eine gültige E-Mail ein.");
            return;
        }

        if (!imageFile) {
            alert("Bitte wählen Sie zuerst ein Bild aus.");
            return;
        }

        const email = emails.trim();
        const namePart = email.split("@")[0];
        const renamedFile = new File([imageFile], `${namePart}_${imageFile.name}`, {
            type: imageFile.type,
        });

        const formData = new FormData();
        formData.append("image", renamedFile);

        const imgbbApiKey = "c80586a4db10d6f8c66c182adacd1f6f";

        try {
            const res = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
                method: "POST",
                body: formData,
            });

            const result = await res.json();

            if (result.success) {
                const imageUrl = result.data.url;
                imageInputHidden.value = imageUrl;

                // Proceed with real form submission
                const web3FormData = new FormData(form);
                web3FormData.append("g-recaptcha-response", recaptchaResponse); // ✅ Required by Web3Forms

                try {
                    const response = await fetch("https://api.web3forms.com/submit", {
                        method: "POST",
                        body: web3FormData,
                    });

                    const json = await response.json();

                    if (json.success) {
                        form.reset();
                        previewImg.src = "";
                        previewImg.classList.add("hidden");
                        grecaptcha.reset(); // ✅ Reset reCAPTCHA

                        const successMsg = document.getElementById("success-message");
                        successMsg.classList.remove("hidden");

                        setTimeout(() => {
                            successMsg.classList.add("hidden");
                        }, 4000);
                    } else {
                        alert("Fehler beim Senden des Formulars.");
                    }
                } catch (err) {
                    console.error("Submit Error:", err);
                    alert("Fehler beim Senden des Formulars.");
                }

            } else {
                alert("Bild-Upload fehlgeschlagen.");
            }
        } catch (err) {
            console.error("Upload Error:", err);
            alert("Fehler beim Bild-Upload.");
        }
    });
});
