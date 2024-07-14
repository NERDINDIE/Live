let usageLimits = {
  news: 30, // minutes
  rental: 20,
  shopping: 40,
  finance: 30,
  events: 15,
  tv: 60,
  delivery: 20,
  streaming: 60,
};

let usageTracker = {
  news: 0,
  rental: 0,
  shopping: 0,
  finance: 0,
  events: 0,
  tv: 0,
  delivery: 0,
  streaming: 0,
};

function checkUsage(service) {
  if (usageTracker[service] >= usageLimits[service]) {
    alert(`You've reached your limit for ${service}. Please take a break.`);
  }
}

function updateUsage(service) {
  usageTracker[service] += 1;
  document.getElementById(`${service}-time`).innerText = usageTracker[service];
  checkUsage(service);
}

function startService(service) {
  setInterval(() => updateUsage(service), 60000); // Update every minute
}

if (Notification.permission === "default") {
  Notification.requestPermission();
}

function sendBreakNotification() {
  if (Notification.permission === "granted") {
    new Notification("Time to take a break!", {
      body: "You've been using the app for a while. Take a few minutes to rest your eyes and stretch.",
    });
  }
}

setInterval(sendBreakNotification, 3600000); // Send notification every hour
