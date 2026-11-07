'use strict';

document.querySelectorAll('[data-year]').forEach((element) => {
  element.textContent = String(new Date().getFullYear());
});

document.querySelectorAll('[data-copy-email]').forEach((button) => {
  button.addEventListener('click', async () => {
    const email = button.dataset.copyEmail;
    const status = button.parentElement.querySelector('.copy-status');
    try {
      await navigator.clipboard.writeText(email);
      button.textContent = 'Copied!';
      status.textContent = 'Email address copied.';
      window.setTimeout(() => {
        button.textContent = 'Copy email';
        status.textContent = '';
      }, 3000);
    } catch {
      status.textContent = 'Select the email address above to copy it.';
    }
  });
});
