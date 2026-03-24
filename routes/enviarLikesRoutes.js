const express = require('express');
const router = express.Router();

const limiteLikes = 220; // Limite de likes por 24 horas
let likesRecebidos = 0;
let timestampLimite = Date.now();

router.post('/enviar-likes', (req, res) => {
    const agora = Date.now();

    // Verifica se 24 horas se passaram desde o último reset
    if (agora - timestampLimite > 24 * 60 * 60 * 1000) {
        likesRecebidos = 0; // Reseta o contador
        timestampLimite = agora; // Atualiza o timestamp
    }

    const { likes } = req.body;

    // Verifica se o número de likes é válido
    if (likes < 0) {
        return res.status(400).json({ mensagem: 'O número de likes não pode ser negativo.' });
    }

    // Verifica se, ao adicionar os novos likes, não excederemos o limite
    if (likesRecebidos + likes > limiteLikes) {
        return res.status(429).json({ mensagem: `Limite de ${limiteLikes} likes por 24 horas excedido.` });
    }

    likesRecebidos += likes;
    return res.status(200).json({ mensagem: `Likes recebidos: ${likesRecebidos}` });
});

module.exports = router;