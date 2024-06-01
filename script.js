// Get the container element by its ID
const container = document.getElementById('container');

// Get the register button element by its ID
const registerBtn = document.getElementById('register');

// Get the login button element by its ID
const loginBtn = document.getElementById('login');

// Add click event listener to the register button
registerBtn.addEventListener('click', () => {
    // Add the "active" class to the container when register button is clicked
    container.classList.add("active");
});

// Add click event listener to the login button
loginBtn.addEventListener('click', () => {
    // Remove the "active" class from the container when login button is clicked
    container.classList.remove("active");
});
