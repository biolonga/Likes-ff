# Documentação da API Free Fire Likes

## Introdução
A API de Likes do Free Fire permite que os desenvolvedores integrem funcionalidades de curtidas em seus aplicativos. Essa API retorna dados relacionados a quantas curtidas um jogador recebeu.

## Endpoints

### `GET /likes/{playerId}`

- **Descrição**: Obtém a quantidade de curtidas recebidas por um jogador específico.
- **Parâmetros**:
  - `playerId`: O ID do jogador para o qual você deseja consultar as curtidas.
- **Respostas**:
  - `200 OK`: Retorna um objeto JSON com a contagem de curtidas.
  - `404 Not Found`: Caso o jogador não seja encontrado.

### Exemplo de Uso
```bash
curl -X GET "https://api.freefire.likes/v1/likes/{playerId}"
```

## Considerações Finais
Certifique-se de seguir as diretrizes de uso da API e respeitar os limites de chamadas estabelecidos para evitar penalizações.

## Licença
Esta documentação é fornecida sob a licença MIT.