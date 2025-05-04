document.getElementById('ideaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // prevent real submit
    alert('Thank you for submitting your idea! We appreciate your support.');
    this.reset(); // optional: reset the form after submission
});