document.getElementById('download-content').addEventListener('click', function() {
    const content = {
        tips: document.getElementById('tips-content').innerHTML,
        articles: document.getElementById('articles-content').innerHTML,
        fitness: document.getElementById('fitness-content').innerHTML,
        events: document.getElementById('events-content').innerHTML
    };

    const blob = new Blob([JSON.stringify(content)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'health_subchannel_content.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});
