const express = require('express');
const router = express.Router();
const Pokemon = require('../../Models/Pokemon');
const mongoose = require('mongoose');

//Get all pokemon
router.get('/', async (req, res, next) => {
    try {
        const pokemon = await Pokemon.find();
       if (pokemon) {
            res.status(200).json({pokemon: pokemon, count: pokemon.length});
       }
       else {
           res.status(200).json('there is no pokemon')
       }
    } catch(err) {
        next(err);
    }
})

//Get pokemon by id
router.get('/:id', async (req, res, next) => {
    const id = req.params.id;
    try {
        const pokemon = await Pokemon.findOne({id: id});
        if (pokemon) {
            console.log(pokemon);
            res.status(200).json({
                data: pokemon,
                message: 'pokemon found'
            })
        }
        else {
            res.status(400).json({
                data: pokemon,
                message: 'pokemon does not exist'
            })
        }
    } catch(err) {
        next(err);
    }
})

//Add pokemon
router.post('/', async (req, res, next) => {
    const retPoke= req.body;
    
    try {
        const newPoke = new Pokemon(retPoke);
        await newPoke.save();
        res.status(201).json({
            data: retPoke,
            message: 'pokemon added!'
        });
    } catch(err) {
        next(err);
    }
    
})

//Update pokemon
router.put('/:id', async (req, res, next) => {
    const {id} = req.params;  
    const retPoke= req.body;
    try {
        Pokemon
        .findOne({id: id})
        .then(poke => {
            poke.name = retPoke.name;
            poke.image = retPoke.image;
            poke.save()
        })
        .then(() => {
            res.status(200).json({
                data: retPoke,
                message: 'pokemon updated'
            });
        })
        .catch(err => console.log(err));
    } catch(err) {
        next(err);
    }
})

//Delete pokemon
router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    
    try {
        await Pokemon.deleteOne({id: id});
        res.status(200).json({
            data: id,
            message: 'pokemon deleted'
        });
    } catch(err) {
        res.status(400).json({
            message: 'pokemon does not exist!'
        });
    }
})

module.exports = router;