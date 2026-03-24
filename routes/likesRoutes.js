'use strict';

const express = require('express');
const router = express.Router();

// Mock data for likes
let likes = [];

// Get all likes
router.get('/', (req, res) => {
    res.status(200).json(likes);
});

// Add a like
router.post('/', (req, res) => {
    const { userId, postId } = req.body;
    if (!userId || !postId) {
        return res.status(400).json({ message: 'User ID and Post ID are required.' });
    }
    likes.push({ userId, postId, createdAt: new Date() });
    res.status(201).json({ message: 'Like added successfully!' });
});

// Remove a like
router.delete('/', (req, res) => {
    const { userId, postId } = req.body;
    likes = likes.filter((like) => !(like.userId === userId && like.postId === postId));
    res.status(200).json({ message: 'Like removed successfully!' });
});

module.exports = router;
