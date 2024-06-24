    function addNewsUpdate(){
        const newsContainer = document.querySelector ('.news-container');
        const newsUpdate = document.createElement ('div');
        newsUpdate.classList.add ('news-update');
        newsUpdate.innerHTML = '
        <h2> The Newsblog </h2>; 
        <p> The pulse of the geek world</p>;
        ';
        newsContainer.prepend(newsUpdate);
    }

    setInterval(addNewsUpdate. 10000);

    fetch('https://')
    .then(response => response.json())
    .then (data => {
        // Process and display the news data.
    })
    .catch (error => {
        console.error ('Error fetching news:' . error);
    });
