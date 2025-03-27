document.getElementById("registrationForm").addEventListener("submit", function(event) {
    if (localStorage.getItem("formSubmitted")) {
        alert("You have already submitted the form!");
        event.preventDefault();
    } else {
        localStorage.setItem("formSubmitted", "true");
    }
});
