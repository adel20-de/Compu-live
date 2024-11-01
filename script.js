function updateDateTime() {
    const dateTimeElement = document.getElementById("datetime");
    const now = new Date();
    dateTimeElement.textContent = now.toLocaleString();
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to set the time when the page loads
updateDateTime();
