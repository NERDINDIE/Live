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
document.addEventListener("DOMContentLoaded", function() {
    // Array of station data (replace with actual data)
    const stations = [
        { name: "Station 1", id: "station1", content: ["Song 1", "Song 2", "Song 3"] },
        { name: "Station 2", id: "station2", content: ["Song A", "Song B", "Song C"] },
        { name: "Station 3", id: "station3", content: ["Show X", "Show Y", "Show Z"] }
        // Add more stations and content as needed
    ];

    // Display content library for selected station
    const stationButtons = document.querySelectorAll(".station-btn");
    const contentList = document.getElementById("contentList");

    stationButtons.forEach(button => {
        button.addEventListener("click", function() {
            const stationId = this.getAttribute("data-station");
            const station = stations.find(station => station.id === stationId);

            // Display station name
            contentList.innerHTML = `<h3>${station.name} Content</h3>`;

            // Display content items
            station.content.forEach(item => {
                const listItem = document.createElement("li");
                listItem.textContent = item;
                contentList.appendChild(listItem);
            });
        });
    });
});
const express = require("express");
const app = express();
const PORT = 3000;

// Dummy station data
const stations = [
    { name: "Station 1", id: "station1", content: ["Song 1", "Song 2", "Song 3"] },
    { name: "Station 2", id: "station2", content: ["Song A", "Song B", "Song C"] },
    { name: "Station 3", id: "station3", content: ["Show X", "Show Y", "Show Z"] }
    // Add more stations and content
const express = require("express");
const app = express();
const multer = require("multer");
const cors = require("cors");
const fs = require("fs");
const path = require("path");

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static("public"));
app.use("/uploads", express.static("uploads"));

// Multer setup for file uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Routes
const showsRouter = require("./routes/shows");
const episodesRouter = require("./routes/episodes");

app.use("/api/shows", showsRouter);
app.use("/api/episodes", episodesRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
const express = require("express");
const router = express.Router();

// Dummy data (replace with actual database)
let shows = [
    { id: 1, title: "Show 1", description: "Description of Show 1" },
    { id: 2, title: "Show 2", description: "Description of Show 2" },
    { id: 3, title: "Show 3", description: "Description of Show 3" }
];

// Get all shows
router.get("/", (req, res) => {
    res.json(shows);
});

// Get a single show by ID
router.get("/:id", (req, res) => {
    const showId = parseInt(req.params.id);
    const show = shows.find(show => show.id === showId);
    if (!show) {
        return res.status(404).json({ message: "Show not found" });
    }
    res.json(show);
});

// Create a new show
router.post("/", (req, res) => {
    const { title, description } = req.body;
    const newShow = { id: shows.length + 1, title, description };
    shows.push(newShow);
    res.status(201).json(newShow);
});

// Update a show by ID
router.put("/:id", (req, res) => {
    const showId = parseInt(req.params.id);
    const updatedShow = req.body;
    shows = shows.map(show => (show.id === showId ? updatedShow : show));
    res.json(updatedShow);
});

// Delete a show by ID
router.delete("/:id", (req, res) => {
    const showId = parseInt(req.params.id);
    shows = shows.filter(show => show.id !== showId);
    res.status(204).end();
});

module.exports = router;
const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Dummy data (replace with actual database)
let episodes = [
    { id: 1, showId: 1, title: "Episode 1", audioUrl: "uploads/episode1.mp3" },
    { id: 2, showId: 1, title: "Episode 2", audioUrl: "uploads/episode2.mp3" },
    { id: 3, showId: 2, title: "Episode 1", audioUrl: "uploads/episode3.mp3" }
];

// Multer setup for episode uploads
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});

const upload = multer({ storage });

// Get all episodes
router.get("/", (req, res) => {
    res.json(episodes);
});

// Get episodes for a specific show
router.get("/show/:showId", (req, res) => {
    const showId = parseInt(req.params.showId);
    const showEpisodes = episodes.filter(episode => episode.showId === showId);
    res.json(showEpisodes);
});

// Upload a new episode
router.post("/", upload.single("audio"), (req, res) => {
    const { showId, title } = req.body;
    const newEpisode = {
        id: episodes.length + 1,
        
    const livePlayer = document.getElementById('livePlayer');

    // Play the audio
    function playAudio() {
        livePlayer.play();
    }

    // Pause the audio
    function pauseAudio() {
        livePlayer.pause();
    }

    // Adjust volume
    function setVolume(volume) {
        livePlayer.volume = volume;
    }
    document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("partnerInquiryForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        // Get form data
        const formData = new FormData(form);
        
        // Optional: Validate form fields
        const fullName = formData.get("fullName");
        const email = formData.get("email");
        const message = formData.get("message");

        // You can add more validation here...

        // Submit form data (replace with your server-side endpoint)
        fetch("submit_form.php", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // Form submission successful
                alert("Your inquiry has been submitted. Thank you!");
                form.reset();
            } else {
                // Handle error
                alert("An error occurred. Please try again later.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("An error occurred. Please try again later.");
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const colorPicker = document.getElementById("colorPicker");
    const fontSelect = document.getElementById("fontSelect");
    const fontSizeRange = document.getElementById("fontSizeRange");
    const saveThemeBtn = document.getElementById("saveThemeBtn");

    // Function to save the theme
    function saveTheme() {
        const theme = {
            color: colorPicker.value,
            font: fontSelect.value,
            fontSize: fontSizeRange.value
        };

        // Convert theme object to JSON string
        const themeJson = JSON.stringify(theme);

        // Create a Blob object from the JSON string
        const blob = new Blob([themeJson], { type: "application/json" });

        // Create a temporary anchor element
        const anchor = document.createElement("a");
        anchor.href = URL.createObjectURL(blob);
        anchor.download = "custom_theme.json";
        anchor.click();
    }

    // Event listener for save button click
    saveThemeBtn.addEventListener("click", saveTheme);
});    
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.post('/upload', upload.single('file'), (req, res) => {
  const uploadedFile = req.file;
  // Process the uploaded file (e.g., save to storage, trigger conversion)
  res.sendStatus(200);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
const pdf2img = require('pdf2img');
const fs = require('fs');

function convertPDFToImages(pdfFilePath, outputDirectory) {
  pdf2img.setOptions({
    type: 'jpg',
    size: 1024,
    density: 600,
  });

  pdf2img.convert(pdfFilePath, { outputformat: 'jpg', outputdir: outputDirectory }, (err, info) => {
    if (err) {
      console.error('Error converting PDF to images:', err);
    } else {
      console.log('Conversion successful:', info);
    }
  });
}

// Example usage:
const pdfFilePath = 'path/to/pdf/file.pdf';
const outputDirectory = 'path/to/output/directory';
convertPDFToImages(pdfFilePath, outputDirectory);
    // JavaScript for customization options
const flipbookElement = document.querySelector('.flipbook');

function customizeFlipbook(options) {
  // Apply customization options (e.g., page flip animation, navigation controls)
  flipbookElement.style.animation = `flip ${options.animationDuration}s forwards`;
}

// Example usage:
const customizationOptions = {
  animationDuration: 1.5 // seconds
};
customizeFlipbook(customizationOptions);
