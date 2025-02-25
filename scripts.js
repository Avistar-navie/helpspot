// Function to save data to local storage
function saveToLocalStorage(key, data) {
    let items = JSON.parse(localStorage.getItem(key)) || []; // Get existing items or initialize an empty array
    items.push(data); // Add new data
    localStorage.setItem(key, JSON.stringify(items)); // Save back to local storage
}

// Handle the "I Need Help Today" form submission
document.getElementById('request-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const category = document.getElementById('request-category').value;
    const name = document.getElementById('request-name').value;
    const title = document.getElementById('title').value;
    const description = document.getElementById('description').value;
    const location = document.getElementById('request-location').value;

    // Create a request object
    const request = {
        category,
        name,
        title,
        description,
        location,
        timestamp: new Date().toLocaleString(), // Add a timestamp
    };

    // Save the request to local storage
    saveToLocalStorage('requests', request);

    // Clear the form
    document.getElementById('request-form').reset();

    // Show a success message
    alert('Your request has been submitted!');

    // Refresh the displayed requests (only on the main page)
    if (window.location.pathname.endsWith('index.html')) {
        displayRequests();
    }
});

// Handle the "I Can Help Today" form submission
document.getElementById('help-form')?.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from submitting

    // Get form values
    const category = document.getElementById('help-category').value;
    const name = document.getElementById('help-name').value;
    const skills = document.getElementById('skills').value;
    const location = document.getElementById('help-location').value;
    const availability = document.getElementById('availability').value;
    const contact = document.getElementById('contact').value;

    // Create a help offer object
    const offer = {
        category,
        name,
        skills,
        location,
        availability,
        contact,
        timestamp: new Date().toLocaleString(), // Add a timestamp
    };

    // Save the offer to local storage
    saveToLocalStorage('offers', offer);

    // Clear the form
    document.getElementById('help-form').reset();

    // Show a success message
    alert('Thank you for offering your help!');

    // Refresh the displayed offers (only on the main page)
    if (window.location.pathname.endsWith('index.html')) {
        displayOffers();
    }
});

// Function to display requests
function displayRequests() {
    const requests = JSON.parse(localStorage.getItem('requests')) || [];
    const requestsList = document.getElementById('requests-list');
    if (requestsList) {
        requestsList.innerHTML = ''; // Clear the list

        requests.forEach((request, index) => {
            const requestItem = document.createElement('div');
            requestItem.className = 'request-item';
            requestItem.innerHTML = `
                <h3>${request.title}</h3>
                <p><strong>Name:</strong> ${request.name}</p>
                <p><strong>Category:</strong> ${request.category}</p>
                <p><strong>Description:</strong> ${request.description}</p>
                <p><strong>Location:</strong> ${request.location}</p>
                <p><strong>Posted:</strong> ${request.timestamp}</p>
            `;
            requestsList.appendChild(requestItem);
        });
    }
}

// Function to display offers
function displayOffers() {
    const offers = JSON.parse(localStorage.getItem('offers')) || [];
    const offersList = document.getElementById('offers-list');
    if (offersList) {
        offersList.innerHTML = ''; // Clear the list

        offers.forEach((offer, index) => {
            const offerItem = document.createElement('div');
            offerItem.className = 'offer-item';
            offerItem.innerHTML = `
                <h3>${offer.name}</h3>
                <p><strong>Category:</strong> ${offer.category}</p>
                <p><strong>Skills/Resources:</strong> ${offer.skills}</p>
                <p><strong>Location:</strong> ${offer.location}</p>
                <p><strong>Availability:</strong> ${offer.availability}</p>
                <p><strong>Contact:</strong> ${offer.contact}</p>
                <p><strong>Posted:</strong> ${offer.timestamp}</p>
            `;
            offersList.appendChild(offerItem);
        });
    }
}

// Display requests and offers when the page loads
window.onload = function () {
    displayRequests();
    displayOffers();
};