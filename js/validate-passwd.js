console.log("Script Loaded")

const form = document.querySelector("form");

const passwordInput = document.querySelector("#password")
const passwordConfirm = document.querySelector("#password-confirm")

form.addEventListener("submit", (e) => {
    if (passwordInput.value !== passwordConfirm.value) {
        e.preventDefault();
        alert("The passwords do not match. Please try again.");
    }
});