document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contactForm');
  
    form.addEventListener('submit', function (event) {
      event.preventDefault(); // evita il comportamento di default
  
      const name = document.getElementById('name').value.trim();
      const email = document.getElementById('email').value.trim();
      const message = document.getElementById('message').value.trim();
  
      const subject = encodeURIComponent('Messaggio dal sito web');
      const body = encodeURIComponent(`Nome: ${name}\nEmail: ${email}\nMessaggio:\n${message}`);
  
      const mailtoLink = `mailto:roxanachircusi@icloud.com?subject=${subject}&body=${body}`;
  
      window.location.href = mailtoLink;
    });
  });
  