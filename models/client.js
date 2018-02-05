let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let clientSchema = new Schema({
    name : 'string',
    mail : 'string',
    phone : 'number',
    project : 'string',
    status : 'string'
});

let client = mongoose.model('Client', clientSchema);

module.exports = client;