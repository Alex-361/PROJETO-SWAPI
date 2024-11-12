const axios = require('axios');

describe('Planet Detail API Tests', () => {
  const baseUrl = 'https://swapi.dev/api/planets/';

  it('should fetch a specific planet by ID', async () => {
    try {
      const response = await axios.get(`${baseUrl}1/`); // Pegando o primeiro planeta, Tatooine
      expect(response.status).toBe(200);
      expect(response.data.name).toBe('Tatooine');  // Verifica se o nome do planeta é Tatooine
      expect(response.data.climate).toBe('arid');  // Verifica se o clima é árido
      expect(response.data.population).toBe('200000');  // Verifica a população do planeta
    } catch (error) {
      expect(error).toBeUndefined();
    }
  });

  it('should return 404 when requesting a non-existent planet', async () => {
    try {
      const response = await axios.get(`${baseUrl}9999/`); // Um ID inexistente
      expect(response.status).toBe(404);  // Espera um erro 404
    } catch (error) {
      expect(error.response.status).toBe(404);  // Verifica se o erro é 404
    }
  });
});
