const form = document.querySelector('form[name="f1"]');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  if (!validateFormData(formData)) {
    alert('Please fill in all the required fields');
    return;
  }
  fetch('register.php', {
    method: 'POST',
    body: formData
  })
  .then((response) => response.json())
  .then((data) => {
    if (data.success) {
      alert('Registration successful!');
    } else {
      alert('Registration failed: ' + data.error);
    }
  })
  .catch((error) => {
    console.error('Error sending form data:', error);
  });
});
function validateFormData(formData) {
  const requiredFields = ['username', 'password', 'email', 'phno', 'radio', 'checkbox', 'address'];
  let isValid = true;

  requiredFields.forEach((field) => {
    if (!formData.get(field)) {
      isValid = false;
    }
  });
  return isValid;
}