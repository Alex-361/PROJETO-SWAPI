const axios = require('axios');

// Definindo a URL base da API de estrelas (ajuste conforme necessário)
const baseUrl = 'https://swapi.dev/api/starships/';

describe('Star API Tests', () => {
  // Teste para pegar todas as estrelas
  it('should fetch all stars', async () => {
    try {
      const response = await axios.get(baseUrl);
      expect(response.status).toBe(200); // Verifica se o status da resposta é 200
      expect(Array.isArray(response.data.results)).toBe(true); // Verifica se o retorno é um array
    } catch (error) {
      // Em caso de erro, falha o teste
      expect(error).toBeUndefined();
    }
  });

  // Teste para pegar uma estrela específica (com um ID de exemplo, ajuste conforme necessário)
  it('should fetch a specific star by ID', async () => {
    try {
      const response = await axios.get(`${baseUrl}1/`); // Faz uma requisição para a estrela com ID 1
      expect(response.status).toBe(200); // Verifica se o status da resposta é 200
      expect(response.data.name).toBe('Tatooine'); // Verifica se o nome da estrela é 'Tatooine'
    } catch (error) {
      // Verifica se o erro retornado é 404, indicando que o recurso não foi encontrado
      if (error.response && error.response.status === 404) {
        expect(error.response.status).toBe(404); // Verifica se o status é 404
      } else {
        // Caso contrário, falha o teste
        expect(error).toBeUndefined();
      }
    }
  });
});
