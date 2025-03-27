document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully! You can only submit once.");
    document.getElementById("registrationForm").style.display = "none";
});
