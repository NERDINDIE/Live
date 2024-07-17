function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
    }).then(response => response.json())
      .then(data => {
          if (data.auth) {
              document.getElementById('auth').style.display = 'none';
              document.getElementById('chat').style.display = 'block';
              socket = io({ query: { token: data.token } });

              socket.on('previous messages', function(messages) {
                  messages.forEach(msg => {
                      addMessageToUI(msg);
                  });
              });

              socket.on('chat message', function(msg) {
                  addMessageToUI(msg);
                  showNotification(msg);
              });

              socket.on('media message', function(filePath) {
                  const item = document.createElement('li');
                  const fileLink = document.createElement('a');
                  fileLink.href = filePath;
                  fileLink.textContent = 'View File';
                  item.appendChild(fileLink);
                  document.getElementById('messages').appendChild(item);
              });

              socket.on('typing', ({ user, isTyping }) => {
                  const indicator = document.getElementById('typing-indicator');
                  indicator.textContent = isTyping ? `${user} is typing...` : '';
              });

              socket.on('message read', function(msgId) {
                  document.getElementById(msgId).classList.add('read');
              });

              socket.on('user status', function({ userId, status }) {
                  updateUserStatus(userId, status);
              });

              fetchFriends();
              fetchEvents();
          } else {
              alert('Login failed');
          }
      });
}
