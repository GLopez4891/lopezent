const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('This is the Lopez ENT App');
});

app.listen(3000, () => console.log('Server running un port 3000'));