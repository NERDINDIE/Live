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
  checkUsage(service);
}

setInterval(() => {
  Object.keys(usageTracker).forEach(service => updateUsage(service));
}, 60000); // Update every minute
