const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.json({name:Emenike})
})

app.listen(process.env.PORT || 3000);

module.exports = app;
