function toggleNav(){
    var sideNav = document.querySelector('.sidenav');
    sidenav.classList.toggle("open");
}
var toggleButton = document.querySelector("#toggle-button");
toggleButton.addEventListener("click",toggleNav);
document.addEventListener("DOMContentLoaded", function() {
    const stations = [
        { name: "Station 1", id: "station1", content: { showSeries: ["Show 1", "Show 2", "Show 3"], podcasts: ["Podcast 1", "Podcast 2", "Podcast 3"] } },
        { name: "Station 2", id: "station2", content: { showSeries: ["Show A", "Show B", "Show C"], podcasts: ["Podcast A", "Podcast B", "Podcast C"] } },
        { name: "Station 3", id: "station3", content: { showSeries: ["Show X", "Show Y", "Show Z"], podcasts: ["Podcast X", "Podcast Y", "Podcast Z"] } }
        // Add more stations and content
    ];

    const stationButtons = document.querySelectorAll(".station-btn");
    const showSeriesList = document.getElementById("showSeriesList");
    const podcastsList = document.getElementById("podcastsList");

    stationButtons.forEach(button => {
        button.addEventListener("click", function() {
            const stationId = this.getAttribute("data-station");
            const station = stations.find(station => station.id === stationId);

            // Display show series
            showSeriesList.innerHTML = "";
            station.content.showSeries.forEach(show => {
                const listItem = document.createElement("li");
                listItem.textContent = show;
                showSeriesList.appendChild(listItem);
            });

            // Display podcasts
            podcastsList.innerHTML = "";
            station.content.podcasts.forEach(podcast => {
                const listItem = document.createElement("li");
                listItem.textContent = podcast;
                podcastsList.appendChild(listItem);
            });
        });
    });
});
                                                        
