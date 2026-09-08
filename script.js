// ================================
// DJ MORYA 077 - JavaScript
// ================================


// ================================
// 1. BOOKING FORM
// ================================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function (event) {

        event.preventDefault();

        // Get form values
        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const eventType = document.getElementById("event").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();


        // ================================
        // Required fields check
        // ================================

        if (
            name === "" ||
            mobile === "" ||
            eventType === "" ||
            date === ""
        ) {

            alert("Please fill all required fields.");

            return;
        }


        // ================================
        // Mobile number check
        // ================================

        const cleanMobile = mobile.replace(/\D/g, "");

        if (cleanMobile.length < 10) {

            alert("Please enter a valid mobile number.");

            return;
        }


        // ================================
        // WhatsApp Number
        // ================================

        const whatsappNumber = "918605481224";


        // ================================
        // WhatsApp Message
        // ================================

        const whatsappMessage =
            "Hello DJ Morya! 🎧\n\n" +
            "I would like to book your DJ service.\n\n" +
            "Name: " + name + "\n" +
            "Mobile: " + mobile + "\n" +
            "Event: " + eventType + "\n" +
            "Date: " + date + "\n" +
            "Event Details: " + (message || "Not provided");


        // ================================
        // Open WhatsApp
        // ================================

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            encodeURIComponent(whatsappMessage);


        window.open(whatsappURL, "_blank");


        // ================================
        // Success message
        // ================================

        alert("Booking request is ready! WhatsApp is opening.");


        // Clear form
        bookingForm.reset();

    });

}


// ================================
// 2. GALLERY IMAGE POPUP
// ================================

function openImage(imageSrc) {

    const imagePopup = document.getElementById("imagePopup");
    const popupImage = document.getElementById("popupImage");

    if (imagePopup && popupImage) {

        popupImage.src = imageSrc;

        imagePopup.style.display = "flex";
    }
}


// ================================
// 3. CLOSE IMAGE POPUP
// ================================

function closeImage() {

    const imagePopup = document.getElementById("imagePopup");

    if (imagePopup) {

        imagePopup.style.display = "none";
    }
}


// ================================
// 4. CLOSE POPUP WITH ESC KEY
// ================================

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeImage();

    }

});
