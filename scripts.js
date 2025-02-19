console.log('scripts.js loaded');

// Handle the "I Need Help Today" form submission
document.getElementById('request-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const category = document.getElementById('category').value; // Get the selected category
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('location').value;

    // Display the request (for now, we'll just log it to the console)
    console.log('New Request:');
    console.log('Category:', category); // Log the selected category
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Location:', location);

    // Clear the form
    document.getElementById('request-form').reset();

    // Show a success message
    alert('Your request has been submitted!');
});

// Handle the "I Can Help Today" form submission
document.getElementById('help-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const category = document.getElementById('category').value; // Get the selected category
    const name = document.getElementById('name').value;
    const skills = document.getElementById('skills').value;
    const availability = document.getElementById('availability').value;
    const contact = document.getElementById('contact').value;

    // Display the offer (for now, we'll just log it to the console)
    console.log('New Help Offer:');
    console.log('Category:', category); // Log the selected category
    console.log('Name:', name);
    console.log('Skills/Resources:', skills);
    console.log('Availability:', availability);
    console.log('Contact:', contact);

    // Clear the form
    document.getElementById('help-form').reset();

    // Show a success message
    alert('Thank you for offering your help!');
});

// Function to toggle collapsible sections (for categories.html)
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section.style.display === "block") {
        section.style.display = "none";
    } else {
        section.style.display = "block";
    }
}