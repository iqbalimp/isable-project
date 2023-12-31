const express = require('express')
const mongoose = require('mongoose')
const Abjad = require('./models/abjadModel')
const Angka = require('./models/angkaModel')
const Map = require('./models/mapModel')
const app = express()

app.use(express.json())


.then(() =>{
    console.log('Connected to mongoDB')
    app.listen(5000, ()=> {
        console.log(`Isable running on 5000`)
    })
}).catch((error) => {
    console.log(error)
})

app.get("/", (req,res) =>{
    res.send('Hello Isable')
})

//GET all Abjad
app.get('/abjad', async(req, res) => {
    try {
        const abjad = await Abjad.find({});
        res.status(200).json(abjad)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.get('/abjad/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const abjad = await Abjad.findOne({ name });

        if (!abjad) {
            return res.status(404).json({ message: 'Abjad not found' });
        }

        res.status(200).json(abjad);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


//POST ke table abjads
app.post('/abjad', async(req, res) =>{
    try {
        const abjad = await Abjad.create(req.body)
        res.status(200).json(abjad);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//GET all Angka
app.get('/angka', async(req, res) => {
    try {
        const angka = await Angka.find({});
        res.status(200).json(angka)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.get('/angka/:name', async (req, res) => {
    try {
        const { name } = req.params;
        const angka = await Angka.findOne({ name });

        if (!angka) {
            return res.status(404).json({ message: 'Angka not found' });
        }

        res.status(200).json(angka);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});


//POST ke table angkas
app.post('/angka', async(req, res) =>{
    try {
        const angka = await Angka.create(req.body)
        res.status(200).json(angka);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})

//GET all Map
app.get('/map', async(req, res) => {
    try {
        const map = await Map.find({});
        res.status(200).json(map)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

//GET berdasarkan provinsi Map
app.get('/map/provinsi/:provinsi', async (req, res) => {
    try {
        const { provinsi } = req.params;
        const map = await Map.find({ provinsi });

        if (!map) {
            return res.status(404).json({ message: 'Provinsi not found' });
        }

        res.status(200).json(map);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

//GET berdasarkan kota Map
app.get('/map/kota/:kota', async (req, res) => {
    try {
        const { kota } = req.params;
        const map = await Map.find({ kota });

        if (!map) {
            return res.status(404).json({ message: 'Kota not found' });
        }

        res.status(200).json(map);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error.message });
    }
});

//POST ke table maps
app.post('/map', async(req, res) =>{
    try {
        const map = await Map.create(req.body)
        res.status(200).json(map);
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message});
    }
})