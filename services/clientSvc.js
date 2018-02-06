const express = require('express');
const configMongoose = require('./../config/connection');
const clientSchema = require('./../models/client.js');

let app = express();

app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods",  ["GET,HEAD,PUT,PATCH,POST,DELETE"]);
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/Client', (request, response) => {
    clientSchema.find((error, clients) => {
        response.send(clients);
    });
});

app.post('/Client', (request, response) => {
    console.log(request.body);
    let client = new clientSchema(request.body);

    client.save((error) => {
        if (error) response.send("Error");
        else response.send("Ok");
    });
});

app.delete('/Client/:id', (request, response) => {
    clientSchema.find({ _id: request.params.id }).remove((error) => {
        if (error) response.send("Error");
        else response.send("Ok");
    });
});

app.listen(8080, () => {
   console.log('App listening on port 8080!');
});