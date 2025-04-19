emailjs.init("Cooun1hIecf5xKR_W"); // your public key

document.getElementById("contact-form").addEventListener("submit", function (e) {
  e.preventDefault();

  emailjs.sendForm('service_ammnco6', 'template_8ysz494', this)
    .then(function () {
      alert("Message sent successfully!");
    }, function (error) {
      alert("Failed to send message: " + JSON.stringify(error));
      console.error(error);
    });
});
