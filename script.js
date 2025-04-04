document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const submitButton = document.querySelector("button");
    const messageDiv = document.createElement("div");

    // Check if form is already submitted
    if (localStorage.getItem("formSubmitted")) {
        form.style.display = "none";  // Hide the form
        messageDiv.innerHTML = "<h3 style='color: red;'>You have already submitted the form.</h3>";
        document.body.appendChild(messageDiv);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent actual form submission
        
        // Save submission status
        localStorage.setItem("formSubmitted", "true");

        // Hide form and show message
        form.style.display = "none";
        messageDiv.innerHTML = "<h3 style='color: green;'>Thank you for registering!</h3>";
        document.body.appendChild(messageDiv);
    });
});
