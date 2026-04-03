// Initialize EmailJS
(function() {
  // Replace with your EmailJS Public Key
  emailjs.init("zbAo3aHiJQeEMMr1X");
})();

// Grab elements
const form = document.getElementById("enquiryForm");
const btnRequestDemo = document.getElementById("btnRequestDemo");
const btnWhatsapp = document.getElementById("btnWhatsapp");

// Smooth scroll to form when "Request a Demo" button is clicked
if (btnRequestDemo) {
  btnRequestDemo.addEventListener("click", function(e) {
    e.preventDefault();
    form.scrollIntoView({ behavior: "smooth" });
  });
}

// Open WhatsApp chat when "Chat on WhatsApp" button is clicked
if (btnWhatsapp) {
  btnWhatsapp.addEventListener("click", function(e) {
    e.preventDefault();
    // Replace the phone number in the link with your real WhatsApp number
    window.open("https://wa.me/2349019758019?text=Hello%2C%20I%20am%20interested%20in%20HotelDesk", "_blank");
  });
}

// Handle form submission via EmailJS
if (form) {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    // Collect form values
    const params = {
      owner_name: document.getElementById("contact-name").value,
      hotel_name: document.getElementById("hotel-name").value,
      phone: document.getElementById("phone").value,
      location: document.getElementById("location").value,
      rooms: document.getElementById("rooms").value,
      current_system: document.getElementById("current-system").value,
      biggest_challenge: document.getElementById("challenge").value,
      extra_details: document.getElementById("message").value,
      // Optional: you can add a reply-to email field if you collect emails
      email: document.getElementById("contact-name").value
    };

    // Send email via EmailJS
    emailjs.send("service_dqve7sv", "template_fnqxhq8", params)
      .then(function(response) {
        alert("Enquiry sent successfully! We will contact you shortly.");
        form.reset();
      }, function(error) {
        console.error(error);
        alert("Failed to send enquiry. Please try again.");
      });
  });
}