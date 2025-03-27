/* Apply background color */
body {
    background-color: #ffdddd; /* Light pink background */
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
}

/* Centering the container */
.container {
    max-width: 600px;
    margin: 20px auto;
    background-color: #ffffff; /* White background for form */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
}

/* Header: Logo and Title Side by Side */
.header {
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
}

.logo {
    width: 50px;
    height: auto;
}

/* Form Styles */
form {
    display: flex;
    flex-direction: column;
}

/* Labels and Inputs */
label {
    font-weight: bold;
    margin-top: 10px;
}

input, select, textarea {
    width: 100%;
    padding: 8px;
    margin-top: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

/* Submit Button */
button {
    background-color: #e63946;
    color: white;
    padding: 10px;
    border: none;
    border-radius: 5px;
    margin-top: 15px;
    font-size: 16px;
    cursor: pointer;
}

button:hover {
    background-color: #d62839;
}

/* Message Box */
.message-box {
    text-align: center;
    font-weight: bold;
    color: #d62839;
    margin-top: 10px;
}
