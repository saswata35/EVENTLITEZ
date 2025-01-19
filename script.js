document.getElementById('create-event-form').addEventListener('submit', function (event) {
    event.preventDefault();
  
    // Get form values
    const eventName = document.getElementById('event-name').value.trim();
    const eventDate = document.getElementById('event-date').value;
    const eventTime = document.getElementById('event-time').value;
    const eventLocation = document.getElementById('event-location').value.trim();
  
    // Validate input
    if (!eventName || !eventDate || !eventTime || !eventLocation) {
      alert('All fields are required!');
      return;
    }
  
    // Create event card
    const eventCard = document.createElement('div');
    eventCard.classList.add('event-card', 'col-md-4');
    eventCard.innerHTML = `
      <h4>${eventName}</h4>
      <p><strong>Date:</strong> ${eventDate}</p>
      <p><strong>Time:</strong> ${eventTime}</p>
      <p><strong>Location:</strong> ${eventLocation}</p>
      <button class="btn btn-danger btn-sm delete-btn">Delete</button>
    `;
  
    // Add delete functionality
    eventCard.querySelector('.delete-btn').addEventListener('click', function () {
      eventCard.remove();
    });
  
    // Append to events container
    document.getElementById('events-container').appendChild(eventCard);
  
    // Clear form
    document.getElementById('create-event-form').reset();
  });
  