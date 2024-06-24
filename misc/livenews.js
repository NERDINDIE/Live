function addNewsUpdate () {
            const newsContainer = document.querySelector ('.news-container');
            const newsUpdates = document.createElement ('div');
            newsUpdate.classList.add ('news-update');
            newsUpdate.innerHTML='
            <h2> The Live </h2>;
            ';
            newsContainer.prepend (newsUpdate);
            setInterval(addNewsUpdate.10000);
        };

        fetch('https://');
        .then (response => response.json());
        try {
            catch (error =>{
                console.error ('Error fetching news'.error);
            });
