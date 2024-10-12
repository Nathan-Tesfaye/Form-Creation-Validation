// Wait until the DOM is fully loaded
document.addEventListener('DOMContentLoaded', function () {

  // Select the form and feedback division
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Add a submit event listener to the form
  form.addEventListener('submit', function (event) {
      // Prevent the form from submitting to the server
      event.preventDefault();

      // Retrieve user input values and trim any extra spaces
      const username = document.getElementById('username').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value.trim();

      // Initialize validation status and messages array
      let isValid = true;
      const messages = [];

      // Username validation: check if it's at least 3 characters long
      if (username.length < 3) {
          isValid = false;
          messages.push('Username must be at least 3 characters long.');
      }

      // Email validation: check if it includes '@' and '.'
      if (!email.includes('@') || !email.includes('.')) {
          isValid = false;
          messages.push('Please enter a valid email address.');
      }

      // Password validation: check if it's at least 8 characters long
      if (password.length < 8) {
          isValid = false;
          messages.push('Password must be at least 8 characters long.');
      }

      // Display the feedback division
      feedbackDiv.style.display = 'block';

      // If the form is valid, show a success message
      if (isValid) {
          feedbackDiv.textContent = 'Registration successful!';
          feedbackDiv.style.color = '#28a745'; // green color for success
      } else {
          // If the form is invalid, show the error messages
          feedbackDiv.innerHTML = messages.join('<br>'); // join messages with line breaks
          feedbackDiv.style.color = '#dc3545'; // red color for error
      }
  });
});
