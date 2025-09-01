// script.js

// Select elements
const form = document.getElementById('feedbackForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const charCount = document.getElementById('charCount');
const output = document.getElementById('feedbackOutput');
const themeToggle = document.getElementById('themeToggle');

/*
  Interactive Feature 1:
  Real-time character counter for message textarea
*/
messageInput.addEventListener('input', () => {
  charCount.textContent = `${messageInput.value.length} / 300 characters`;
});

/*
  Interactive Feature 2:
  Theme toggle button switches between light and dark mode
*/
themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

/*
  Custom form validation:
  Validate name, email format, and message content
*/
form.addEventListener('submit', function (e) {
  e.preventDefault(); // prevent default form submission
  clearErrors();

  let valid = true;

  // Name validation
  if (nameInput.value.trim() === '') {
    showError(nameInput, 'Name is required.');
    valid = false;
  }

  // Email validation (simple regex)
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    showError(emailInput, 'Enter a valid email address.');
    valid = false;
  }

  // Message validation
  if (messageInput.value.trim().length < 10) {
    showError(messageInput, 'Message must be at least 10 characters.');
    valid = false;
  }

  if (valid) {
    displayFeedback();
    form.reset();
    charCount.textContent = '0 / 300 characters';
  }
});

/*
  Utility: Show error message for invalid input
*/
function showError(input, message) {
  const error = document.createElement('div');
  error.className = 'error';
  error.textContent = message;
  input.insertAdjacentElement('afterend', error);
}

/*
  Utility: Clear all previous errors
*/
function clearErrors() {
  const errors = document.querySelectorAll('.error');
  errors.forEach(err => err.remove());
}

/*
  Utility: Display submitted feedback
*/
function displayFeedback() {
  output.innerHTML = `
    <h3>Thank you for your feedback!</h3>
    <p><strong>Name:</strong> ${nameInput.value}</p>
    <p><strong>Email:</strong> ${emailInput.value}</p>
    <p><strong>Message:</strong> ${messageInput.value}</p>
  `;
}
