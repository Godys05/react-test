//Express Import
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');

//Routes Import
const pokeRoutes = require('./routes/api/pokemon.routes');

//Port
const PORT = process.env.PORT || 8000;

//Database URL
const PASSWORD = 'admin1234';
const DB_NAME = 'pokeDB';
const DATABASE_URL = `mongodb+srv://admin:${PASSWORD}@maincluster-njjvp.mongodb.net/${DB_NAME}?retryWrites=true&w=majority`;


//Connect to DB
mongoose.connect(DATABASE_URL)
.then (db => {
    console.log('DB CONNECTED')
    //Server Connection
    const server = app.listen(PORT, () => {
        console.log(`Listening to http://localhost:${server.address().port}`);
    })
})
.catch(err => console.log(err));

//Middleware
app.use(express.json());
app.use(express.urlencoded());
app.use(cors())

//Routes
app.use('/api/pokemon', pokeRoutes);

//Main Routes
app.get('/', (req, res) => {
    res.send('Hello there, general kenobi...');
})