document.getElementById('donation-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const amount = document.getElementById('amount').value;
    const message = document.getElementById('message').value;

    // Simulate form submission (replace with actual backend)
    alert(`Thank you, ${name}! Your donation of ₹${amount} has been received. We'll email you at ${email}.`);
    
    // Reset form
    this.reset();
});