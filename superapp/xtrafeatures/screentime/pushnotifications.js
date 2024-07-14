function sendBreakNotification() {
  if (Notification.permission === "granted") {
    new Notification("Time to take a break!", {
      body: "You've been using the app for a while. Take a few minutes to rest your eyes and stretch.",
    });
  }
}

setInterval(sendBreakNotification, 3600000); // Send notification every hour
