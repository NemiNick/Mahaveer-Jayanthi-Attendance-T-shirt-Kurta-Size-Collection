document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted successfully! You can only submit once.");
    document.getElementById("registrationForm").style.display = "none";
});

// Update Kurta size options based on the reference chart
document.addEventListener("DOMContentLoaded", function() {
    let kurtaSizeSelect = document.getElementById("kurtaSize");
    let sizes = ["M (38)", "L (40)", "XL (42)", "XXL (44)", "3XL (46)", "4XL (48)"];
    kurtaSizeSelect.innerHTML = "";
    sizes.forEach(size => {
        let option = document.createElement("option");
        option.value = size;
        option.textContent = size;
        kurtaSizeSelect.appendChild(option);
    });
});
