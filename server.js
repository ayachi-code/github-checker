const express = require('express');

const app = express();

app.listen(3000);

app.use(express.static('public'));

console.log("Server is aan het runnen: http://localhost:3000");
