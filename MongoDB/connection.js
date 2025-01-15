const {mongoClient} = require('mongodb');
const url = 'mongodb://localhost:27017';
const clientname = new mongoClient(url);
clientname.connect((err, client) => {
    if(err) {
        console.log('Error while connecting to MongoDB');
    } else {
        console.log('Connected to MongoDB');
    }
})  