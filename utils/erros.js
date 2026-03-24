// Funções de tratamento de erros

function handleError(error) {
    console.error("Erro:", error);
    return { message: "Ocorreu um erro ao processar sua solicitação. Por favor, tente novamente mais tarde." };
}

function handleValidationError(errors) {
    console.error("Erros de validação:", errors);
    return { message: "Por favor, verifique os dados informados e tente novamente." };
}

module.exports = { handleError, handleValidationError };