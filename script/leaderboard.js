
    function submitScore(username, score) {
        fetch('/submit-score', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, score })
        }).then(response => response.text())
          .then(data => console.log(data));
    }

    function loadLeaderboard() {
        fetch('/leaderboard')
            .then(response => response.json())
            .then(data => {
                const leaderboard = document.getElementById('leaderboard');
                leaderboard.innerHTML = '';
                data.forEach(score => {
                    const item = document.createElement('li');
                    item.textContent = `${score.username}: ${score.score}`;
                    leaderboard.appendChild(item);
                });
            });
    }

    // Call loadLeaderboard on page load
    loadLeaderboard();
