// ================================
// DJ MORYA 077 - JavaScript
// ================================


// 1. BOOKING FORM
const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const eventType = document.getElementById("event").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();


        // Required fields check
        if (name === "" || mobile === "" || eventType === "" || date === "") {

            alert("Please fill all required fields.");

            return;
        }


        // Mobile number check
        if (mobile.length < 10) {

            alert("Please enter a valid mobile number.");

            return;
        }


        // WhatsApp Number
        const whatsappNumber = "918605481224";


        // WhatsApp Message
        const whatsappMessage =
            "Hello DJ Morya!%0A%0A" +
            "Name: " + name + "%0A" +
            "Mobile: " + mobile + "%0A" +
            "Event: " + eventType + "%0A" +
            "Date: " + date +

            // Gallery Popup
function openImage(imageSrc) {
    document.getElementById("imagePopup").style.display = "flex";
    document.getElementById("popupImage").src = imageSrc;
}

function closeImage() {
    document.getElementById("imagePopup").style.display = "none";
}
