const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/customers', (req, res) => {
    res.send([
        {
            'id':'1',
            'image':'https://placeimg.com/64/64/1',
            'name':'임영웅',
            'birthday':'900729',
            'gender':'남자',
            'job' : '직장인'
        
        },
        {
            'id':'2',
            'image':'https://placeimg.com/64/64/2',
            'name':'김민성',
            'birthday':'900729',
            'gender':'남자',
            'job' : '변호사'
        
        },{
            'id':'3',
            'image':'https://placeimg.com/64/64/3',
            'name':'최민수',
            'birthday':'900729',
            'gender':'남자',
            'job' : '직장인'
        
        }
    ]);
});

app.listen(port, ()=> console.log(`listening on port ${port}`));