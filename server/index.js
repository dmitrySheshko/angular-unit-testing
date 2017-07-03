import express from 'express';
let app = express();

app.use(express.static('public'));

require('./routes')(app);

app.listen(3002, () => {
    console.log('Server is ran. Port: 3002');
});