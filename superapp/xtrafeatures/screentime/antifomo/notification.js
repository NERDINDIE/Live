function sendPersonalizedNotifications(userPreferences, updates) {
    updates.forEach(update => {
        if (userPreferences.includes(update.type)) {
            // Logic to send notification
            console.log(`Sending notification for ${update.type}: ${update.message}`);
        }
    });
}

const userPreferences = ['news', 'events'];
const updates = [
    { type: 'news', message: 'Breaking News: New Policy Update' },
    { type: 'events', message: 'Upcoming Event: Tech Conference' },
    { type: 'shopping', message: 'New Discounts Available' }
];

sendPersonalizedNotifications(userPreferences, updates);
