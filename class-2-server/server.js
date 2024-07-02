const express = require("express");
const path = require("path");

const app = express();

// Serve static files from the 'movie-finder/src' directory
app.use(express.static(path.join(__dirname, '../movie-finder/src')));

// Define a route to serve the index.html file
app.get("/", (req, res) => {
    console.log("hello from inside the index route");
    res.sendFile(path.join(__dirname, '../movie-finder/src', 'index.html'));
});

app.listen(3000, () => {
    console.log("server is running at port 3000. http://localhost:3000");
});
