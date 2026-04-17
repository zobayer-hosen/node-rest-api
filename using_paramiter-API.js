const express = require('express');

const app = express();
const port = 8080;

// Route with parameters
app.get('/users/:userId/books/:bookId', (req, res) => {
    const userId = req.params.userId;
    const bookId = req.params.bookId;

    res.send(`User ID: ${userId}, Book ID: ${bookId}`);
});

// Start server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});