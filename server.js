const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// "public" folder ko static folder bana raha hai
app.use(express.static(path.join(__dirname, "public")));

// Dynamic route for title-based access
app.get("/:title", (req, res) => {
    const pageName = req.params.title + ".html"; // Example: "about" -> "about.html"
    const filePath = path.join(__dirname, "public", pageName);

    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send("Page not found");
        }
    });
});

// Server start
app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});
