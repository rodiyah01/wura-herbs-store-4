// Get the form element
const form = document.getElementById('contact-form');

// Add an event listener to the form's submit event
form.addEventListener('submit', (e) => {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the form data
  const formData = new FormData(form);

  // Get the form fields
  const name = formData.get('name');
  const email = formData.get('email');
  const message = formData.get('message');

  // Validate the form fields
  if (!name || !email || !message) {
    alert('Please fill in all fields');
    return;
  }

  // Send the form data to the server using AJAX
  fetch('/contact', {
    method: 'POST',
    body: formData
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Error sending message');
    }
  })
  .catch((error) => {
    console.error('Error:', error);
  });
});