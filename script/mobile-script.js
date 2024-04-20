// Clock
function updateClock() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  const formattedTime = `${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  document.getElementById('clock').textContent = formattedTime;
}

setInterval(updateClock, 1000);

// Weather (Sample data)
const weatherData = {
  temperature: 25,
  description: 'Sunny',
};

document.getElementById('weather').textContent = `Weather: ${weatherData.temperature}°C, ${weatherData.description}`;

// News (Sample data)
const newsHeadlines = [
  'Headline 1',
  'Headline 2',
  'Headline 3',
  'Headline 4',
  'Headline 5',
];

const newsList = document.getElementById('news');
newsHeadlines.forEach(headline => {
  const listItem = document.createElement('li');
  listItem.textContent = headline;
  newsList.appendChild(listItem);
});

// Radio Player (Sample embed)
const radioPlayer = document.createElement('iframe');
radioPlayer.src = 'https://www.yourradiostream.com/embed/player/player.php?radio=radio_station';
radioPlayer.width = '100%';
radioPlayer.height = '100';
radioPlayer.frameborder = '0';
radioPlayer.scrolling = 'no';
document.getElementById('radioPlayer').appendChild(radioPlayer);
const commandInput = document.getElementById('commandInput');
const outputArea = document.getElementById('outputArea');

commandInput.addEventListener('keydown', function(event) {
  if (event.key === 'Enter') {
    const command = commandInput.value.trim();
    commandInput.value = '';

    // Process command and display output
    processCommand(command);
  }
});

function processCommand(command) {
  // Example: Echo command
  const output = `$ ${command}\n${command}`;
  displayOutput(output);
}

function displayOutput(output) {
  outputArea.textContent += output + '\n';
  outputArea.scrollTop = outputArea.scrollHeight;
}
  
