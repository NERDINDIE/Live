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
