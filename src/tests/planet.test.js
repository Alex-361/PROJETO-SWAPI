const axios = require('axios');

// Configura a URL da API de planetas
const API_URL = 'https://swapi.dev/api/planets/';

describe('Star Wars Planets API', () => {
  // Teste para verificar se a API de planetas responde corretamente
  it('should fetch the list of planets', async () => {
    const response = await axios.get(API_URL);
    expect(response.status).toBe(200); // Verifica se o status da resposta é 200 (OK)
    expect(response.data.results).toBeDefined(); // Verifica se a resposta tem a lista de planetas
  });

  // Teste para verificar se um planeta específico existe
  it('should fetch the planet Tatooine', async () => {
    const response = await axios.get(`${API_URL}1/`); // ID do planeta Tatooine
    expect(response.status).toBe(200);
    expect(response.data.name).toBe('Tatooine'); // Verifica se o nome do planeta é Tatooine
  });
});
