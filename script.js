document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("registrationForm");
    const submitButton = document.querySelector("button");
    const messageDiv = document.createElement("div");
    
    // Prevent duplicate form submissions using LocalStorage
    if (localStorage.getItem("formSubmitted")) {
        form.style.display = "none";  // Hide form
        messageDiv.innerHTML = "<h3 style='color: red;'>You have already submitted the form.</h3>";
        document.body.appendChild(messageDiv);
    }

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Stop actual submission
        
        // Save submission status in local storage
        localStorage.setItem("formSubmitted", "true");

        // Hide form and show message
        form.style.display = "none";
        messageDiv.innerHTML = "<h3 style='color: green;'>Thank you for registering!</h3>";
        document.body.appendChild(messageDiv);
    });
});
