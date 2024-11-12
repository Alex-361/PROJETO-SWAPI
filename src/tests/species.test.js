const axios = require('axios');

describe('Star Wars Species API', () => {
  const baseUrl = 'https://swapi.dev/api/species/';

  it('should return a list of species', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);  // Verifica se a resposta foi bem-sucedida
    expect(response.data.results.length).toBeGreaterThan(0);  // Verifica se existem espécies
  });

  it('should return the correct name for a species', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const species = response.data.results[0];
    expect(species.name).toBeDefined();  // Verifica se o nome da espécie é definido
  });

  it('should return valid properties for a species', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const species = response.data.results[0];
    expect(species).toHaveProperty('name');
    expect(species).toHaveProperty('classification');
    expect(species).toHaveProperty('designation');
  });
});
