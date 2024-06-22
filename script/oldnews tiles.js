document.addEventListener('DOMContentLoaded', function() {
    const newsContainer = document.getElementById('news-container');
    const apiEndpoint = 'https://api.example.com/news'; // Replace with your news API endpoint

    async function fetchNews() {
        try {
            const response = await fetch(apiEndpoint);
            const newsData = await response.json();
            displayNews(newsData.articles);
        } catch (error) {
            console.error('Error fetching news:', error);
        }
    }

    function displayNews(articles) {
        newsContainer.innerHTML = ''; // Clear existing content
        articles.forEach(article => {
            const newsTile = document.createElement('div');
            newsTile.className = 'news-tile';
            newsTile.innerHTML = `
                <img src="${article.imageUrl}" alt="${article.title}">
                <div class="news-tile-content">
                    <h2>${article.title}</h2>
                    <p>${article.description}</p>
                </div>
            `;
            newsContainer.appendChild(newsTile);
        });
    }

    // Fetch news on page load
    fetchNews();

    // Optionally, refresh news periodically (e.g., every 60 seconds)
    setInterval(fetchNews, 60000);
});
