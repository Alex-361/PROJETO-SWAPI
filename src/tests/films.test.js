const axios = require('axios');

describe('Star Wars Films API', () => {
  const baseUrl = 'https://swapi.dev/api/films/';

  it('should return a list of films', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);  // Verifica se a resposta foi bem-sucedida
    expect(response.data.results.length).toBeGreaterThan(0);  // Verifica se existem filmes
  });

  it('should return the correct title for a film', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const film = response.data.results[0];
    expect(film.title).toBeDefined();  // Verifica se o título do filme está definido
  });

  it('should return valid properties for a film', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const film = response.data.results[0];
    expect(film).toHaveProperty('title');
    expect(film).toHaveProperty('episode_id');
    expect(film).toHaveProperty('director');
    expect(film).toHaveProperty('producer');
    expect(film).toHaveProperty('release_date');
  });
});
