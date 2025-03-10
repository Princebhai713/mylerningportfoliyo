const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Dynamic route to serve HTML files based on title name
app.get('/:title', (req, res) => {
    const title = req.params.title;
    const filePath = path.join(__dirname, 'public', `${title}.html`);
    res.sendFile(filePath, (err) => {
        if (err) {
            res.status(404).send('File not found');
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://127.0.0.1:${port}`);
});