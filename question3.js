const express = require('express'); 
const app = express(); // Initialize an Express app


app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Jumel Anthony D. Labe' });
});


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
