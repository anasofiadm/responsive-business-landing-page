// JavaScript for interactivity will be added here

// Example: Smooth scroll to sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


                            document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector('.contact-form');

    form.addEventListener('submit', function (event) {
        // Get form field values
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        // Validate Name: must not be empty
        if (name === '') {
            alert('Please enter your name.');
            event.preventDefault(); // Prevent the form from submitting
            return;
        }

        // Validate Email: must be a valid email format
        if (!validateEmail(email)) {
            alert('Please enter a valid email address.');
            event.preventDefault(); // Prevent the form from submitting
            return;
        }

        // Validate Message: must not be empty
        if (message === '') {
            alert('Please enter a message.');
            event.preventDefault(); // Prevent the form from submitting
            return;
        }

        // All validations passed, the form will be submitted
    });

    // Email validation function
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(String(email).toLowerCase());
    }
});
