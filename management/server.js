const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/hello', (req, res) => {
    res.send({message : 'Hello world!'});
});

app.listen(port, ()=> console.log(`listening on port ${port}`));