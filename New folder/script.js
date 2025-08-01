document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent form from reloading page

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    try {
      const response = await fetch("https://your-backend.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const result = await response.json();
      alert("Message sent successfully!");
      form.reset();
    } catch (err) {
      console.error("Error:", err);
      alert("Something went wrong. Please try again.");
    }
  });
});

