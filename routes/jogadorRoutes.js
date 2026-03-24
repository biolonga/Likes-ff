const express = require('express');
const router = express.Router();

// GET request for fetching all players
router.get('/players', (req, res) => {
    res.send('List of all players');
});

// POST request for creating a new player
router.post('/players', (req, res) => {
    res.send('Player created');
});

// GET request for fetching a single player by ID
router.get('/players/:id', (req, res) => {
    res.send(`Player ${req.params.id}`);
});

// PUT request for updating a player by ID
router.put('/players/:id', (req, res) => {
    res.send(`Player ${req.params.id} updated`);
});

// DELETE request for deleting a player by ID
router.delete('/players/:id', (req, res) => {
    res.send(`Player ${req.params.id} deleted`);
});

module.exports = router;