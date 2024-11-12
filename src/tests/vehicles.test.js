const axios = require('axios');

describe('Star Wars Vehicles API', () => {
  const baseUrl = 'https://swapi.dev/api/vehicles/';

  it('should return a list of vehicles', async () => {
    const response = await axios.get(baseUrl);
    expect(response.status).toBe(200);  // Verifica se a resposta foi bem-sucedida
    expect(response.data.results.length).toBeGreaterThan(0);  // Verifica se existem veículos
  });

  it('should return the correct name for a vehicle', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const vehicle = response.data.results[0];
    expect(vehicle.name).toBeDefined();  // Verifica se o nome do veículo é definido
  });

  it('should return valid properties for a vehicle', async () => {
    const response = await axios.get(`${baseUrl}?page=1`);
    const vehicle = response.data.results[0];
    expect(vehicle).toHaveProperty('name');
    expect(vehicle).toHaveProperty('model');
    expect(vehicle).toHaveProperty('manufacturer');
  });
});
