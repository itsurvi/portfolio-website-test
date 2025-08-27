document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('contactMessage').textContent = 'Thanks for reaching out! I will get back to you soon.';
    this.reset();
});