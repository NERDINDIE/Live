function updateDateTime() {
    const dateElement = document.getElementById('current-date');
    const timeElement = document.getElementById('current-time');
    const editionElement = document.getElementById('edition');

    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Format the date and time
    const formattedDate = now.toLocaleDateString();
    const formattedTime = `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)}`;

    // Determine the edition
    let edition;
    if (hours >= 5 && hours < 12) {
        edition = 'Morning Edition';
    } else if (hours >= 12 && hours < 15) {
        edition = 'Noon Edition';
    } else if (hours >= 15 && hours < 18) {
        edition = 'Afternoon Edition';
    } else if (hours >= 18 && hours < 22) {
        edition = 'Evening Edition';
    } else {
        edition = 'Late Night Edition';
    }

    // Update the DOM elements
    dateElement.textContent = formattedDate;
    timeElement.textContent = formattedTime;
    editionElement.textContent = edition;
}

// Helper function to pad numbers with leading zeros
function padZero(number) {
    return number < 10 ? '0' + number : number;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();
