// =========================
// BOOKING FORM
// =========================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

    bookingForm.addEventListener("submit", function(event) {

        event.preventDefault();

        const name = document.getElementById("name").value.trim();
        const mobile = document.getElementById("mobile").value.trim();
        const eventType = document.getElementById("event").value;
        const date = document.getElementById("date").value;
        const message = document.getElementById("message").value.trim();

        if (
            name === "" ||
            mobile === "" ||
            eventType === "" ||
            date === ""
        ) {
            alert("Please fill all required fields.");
            return;
        }

        if (mobile.length < 10) {
            alert("Please enter a valid mobile number.");
            return;
        }

        const whatsappNumber = "918605481224";

        const whatsappMessage =
            "Hello DJ Morya!%0A%0A" +
            "Name: " + name + "%0A" +
            "Mobile: " + mobile + "%0A" +
            "Event: " + eventType + "%0A" +
            "Date: " + date + "%0A" +
            "Details: " + message;

        const whatsappURL =
            "https://wa.me/" +
            whatsappNumber +
            "?text=" +
            whatsappMessage;

        window.open(whatsappURL, "_blank");

        bookingForm.reset();
    });
}


// =========================
// GALLERY POPUP
// =========================

function openImage(imageSrc) {

    document.getElementById("imagePopup").style.display = "flex";

    document.getElementById("popupImage").src = imageSrc;
}


function closeImage() {

    document.getElementById("imagePopup").style.display = "none";
}


// =========================
// GOOGLE MAP
// =========================

function initMap() {

    const location = {
        lat: 18.6298,
        lng: 73.7997
    };

    const map = new google.maps.Map(
        document.getElementById("map"),
        {
            zoom: 14,
            center: location
        }
    );

    new google.maps.Marker({
        position: location,
        map: map,
        title: "DJ Morya"
    });
}