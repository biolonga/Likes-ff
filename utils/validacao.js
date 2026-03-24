// Funções de validação em português

function validarEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(email);
}

function validarSenha(senha) {
    return senha.length >= 6; // A senha deve ter pelo menos 6 caracteres
}

function validarNome(nome) {
    return nome.length > 0; // O nome não pode ser vazio
}

// Exportando funções
module.exports = {
    validarEmail,
    validarSenha,
    validarNome
};