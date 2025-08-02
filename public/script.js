document.addEventListener('DOMContentLoaded', function () {
  const form = document.getElementById('contact-form');

  if (!form) {
    console.error('Form with ID "contact-form" not found.');
    return;
  }

  form.addEventListener('submit', async function (e) {
    e.preventDefault();

    const nameEl = document.getElementById('name');
    const emailEl = document.getElementById('email');
    const messageEl = document.getElementById('message');

    if (!nameEl || !emailEl || !messageEl) {
      console.error('One or more form fields are missing.');
      return;
    }

    const name = nameEl.value;
    const email = emailEl.value;
    const message = messageEl.value;

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, message }),
      });

      const data = await res.json();
      alert(data.message);
    } catch (err) {
      console.error('Error sending message:', err);
      alert('Error sending message');
    }
  });
});
