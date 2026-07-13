emailjs.init(EMAILJS_PUBLIC_KEY);

const form = document.getElementById('contactForm');
const status = document.getElementById('formStatus');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const btn = form.querySelector('button[type="submit"]');
  btn.textContent = 'Sending...';
  btn.disabled = true;

  emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
    .then(function () {
      status.textContent = 'Message sent successfully!';
      status.className = 'text-sm text-center text-green-400';
      status.classList.remove('hidden');
      form.reset();
      btn.textContent = 'Send message →';
      btn.disabled = false;
    }, function () {
      status.textContent = 'Failed to send message. Please try again.';
      status.className = 'text-sm text-center text-red-400';
      status.classList.remove('hidden');
      btn.textContent = 'Send message →';
      btn.disabled = false;
    });
});
