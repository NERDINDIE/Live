
    if ('Notification' in window) {
        Notification.requestPermission();
    }

    function showNotification(msg) {
        if (Notification.permission === 'granted') {
            new Notification(`${msg.user}: ${msg.text}`);
        }
    }

    socket.on('chat message', function(msg) {
        addMessageToUI(msg);
        showNotification(msg);
    });
