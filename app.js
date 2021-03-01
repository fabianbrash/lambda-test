const express = require('express');
const serverless = require('serverless-http');

const app = express();

const PORT=process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());

app.get('/api/info', (req, res) => {
    res.send({
        application: 'sample-app',
        version: '1.0'
    });
});

app.post('/api/v1/getback', (req,res) => {
    res.send({...req.body});
});

app.listen(PORT, () => {
    console.log(`Listening on: ${PORT}`)
});

module.exports.handler = serverless(app);
