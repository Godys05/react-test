const mongoose = require('mongoose');

const pokeSchema = new mongoose.Schema(
    {
        id: {
            type: Number,
            unique: true,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
    },
    {timestamps: true},
    {collection: 'pokemons'},
);
module.exports = mongoose.model('Pokemon', pokeSchema);
