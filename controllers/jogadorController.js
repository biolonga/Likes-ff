// jogadorController.js

// This controller handles player information CRUD operations

let players = [];

// Get all players
function getAllPlayers(req, res) {
    res.json(players);
}

// Get a player by ID
function getPlayerById(req, res) {
    const player = players.find(p => p.id === req.params.id);
    if (player) {
        res.json(player);
    } else {
        res.status(404).send('Player not found');
    }
}

// Add a new player
function addPlayer(req, res) {
    const newPlayer = {...req.body, id: Date.now().toString()};
    players.push(newPlayer);
    res.status(201).json(newPlayer);
}

// Update a player
function updatePlayer(req, res) {
    let player = players.find(p => p.id === req.params.id);
    if (player) {
        const updatedPlayer = {...player, ...req.body};
        players = players.map(p => p.id === req.params.id ? updatedPlayer : p);
        res.json(updatedPlayer);
    } else {
        res.status(404).send('Player not found');
    }
}

// Delete a player
function deletePlayer(req, res) {
    const playerIndex = players.findIndex(p => p.id === req.params.id);
    if (playerIndex !== -1) {
        players.splice(playerIndex, 1);
        res.status(204).send();
    } else {
        res.status(404).send('Player not found');
    }
}

module.exports = {
    getAllPlayers,
    getPlayerById,
    addPlayer,
    updatePlayer,
    deletePlayer
};