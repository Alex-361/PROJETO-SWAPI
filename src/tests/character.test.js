const axios = require('axios');

describe('Character API tests', () => {
  const apiUrl = 'https://swapi.dev/api/people/';

  it('should return a list of characters', async () => {
    const response = await axios.get(apiUrl);
    expect(response.status).toBe(200);
    expect(Array.isArray(response.data.results)).toBe(true);
    expect(response.data.results.length).toBeGreaterThan(0);
  });

  it('should return character details when a valid character ID is provided', async () => {
    const response = await axios.get(`${apiUrl}1/`);
    expect(response.status).toBe(200);
    expect(response.data.name).toBeDefined();
    expect(response.data.height).toBeDefined();
  });

  it('should return 404 for a non-existent character', async () => {
    try {
      await axios.get(`${apiUrl}999/`);
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
