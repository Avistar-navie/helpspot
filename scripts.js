console.log('scripts.js loaded');
document.getElementById('request-form').addEventListener('submit', function (event) {
    console.log('Form submitted');
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    // Display the request (for now, we'll just log it to the console)
    console.log('New Request:');
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Location:', location);

    // Clear the form
    document.getElementById('request-form').reset();

    // Show a success message
    alert('Your request has been submitted!');
});
document.getElementById('help-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value;
    const availability = document.getElementById('availability').value;
    const contact = document.getElementById('contact').value;

    // Display the offer (for now, we'll just log it to the console)
    console.log('New Help Offer:');
    console.log('Name:', name);
    console.log('Skills/Resources:', skills);
    console.log('Availability:', availability);
    console.log('Contact:', contact);

    // Clear the form
    document.getElementById('help-form').reset();

    // Show a success message
    alert('Thank you for offering your help!');
});
