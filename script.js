// Firebase Configuration
const firebaseConfig = {
    apiKey: "YOUR_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_SENDER_ID",
    appId: "YOUR_APP_ID"
};

firebase.initializeApp(firebaseConfig);
const database = firebase.database();

document.getElementById("registrationForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let formData = {
        fullName: document.getElementById("fullName").value,
        mobileNumber: document.getElementById("mobileNumber").value,
        email: document.getElementById("email").value,
        address: document.getElementById("address").value,
        fatherName: document.getElementById("fatherName").value,
        motherName: document.getElementById("motherName").value || "N/A",
        attendance: document.getElementById("attendance").value,
        tshirtSize: document.getElementById("tshirtSize").value,
        needKurta: document.getElementById("needKurta").value,
        kurtaSize: document.getElementById("needKurta").value === "Yes" ? document.getElementById("kurtaSize").value : "N/A",
        slogan: document.getElementById("slogan").value
    };

    let newRef = database.ref("registrations").push();
    newRef.set(formData).then(() => {
        alert("Form submitted successfully!");
        document.getElementById("registrationForm").reset();
        fetchReports();
    }).catch(error => console.error("Error:", error));
});

function fetchReports() {
    database.ref("registrations").once("value", (snapshot) => {
        let data = snapshot.val();
        let yesCount = 0, noCount = 0, yetCount = 0;
        let sizeCounts = { S: 0, M: 0, L: 0, XL: 0, XXL: 0, XXXL: 0 };
        let kurtaSizes = {};

        for (let key in data) {
            let entry = data[key];
            if (entry.attendance === "Yes") yesCount++;
            else if (entry.attendance === "No") noCount++;
            else if (entry.attendance === "Yet to Plan") yetCount++;

            sizeCounts[entry.tshirtSize]++;

            if (entry.needKurta === "Yes" && entry.kurtaSize) {
                kurtaSizes[entry.kurtaSize] = (kurtaSizes[entry.kurtaSize] || 0) + 1;
            }
        }

        document.getElementById("yesCount").innerText = yesCount;
        document.getElementById("noCount").innerText = noCount;
        document.getElementById("yetCount").innerText = yetCount;

        let kurtaReport = document.getElementById("kurtaReport");
        kurtaReport.innerHTML = "";
        for (let size in kurtaSizes) {
            let li = document.createElement("li");
            li.innerText = `Size ${size}: ${kurtaSizes[size]}`;
            kurtaReport.appendChild(li);
        }
    });
}

// Show or Hide Kurta Size Input
function toggleKurtaSize() {
    let kurtaContainer = document.getElementById("kurtaSizeContainer");
    kurtaContainer.style.display = document.getElementById("needKurta").value === "Yes" ? "block" : "none";
}

fetchReports();
