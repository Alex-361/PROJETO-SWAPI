const axios = require('axios');

describe('Star Wars People API', () => {
  const baseUrl = 'https://swapi.dev/api/people/';

  it('should return a list of people', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);  // Verifica se a resposta foi bem-sucedida
    expect(response.data.results.length).toBeGreaterThan(0);  // Verifica se existem pessoas
  });

  it('should return the correct name for a person', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const person = response.data.results[0];
    expect(person.name).toBeDefined();  // Verifica se o nome da pessoa está definido
  });

  it('should return valid properties for a person', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const person = response.data.results[0];
    expect(person).toHaveProperty('name');
    expect(person).toHaveProperty('height');
    expect(person).toHaveProperty('mass');
    expect(person).toHaveProperty('birth_year');
    expect(person).toHaveProperty('gender');
  });
});
