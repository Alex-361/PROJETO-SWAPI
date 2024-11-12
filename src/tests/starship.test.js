const axios = require('axios');  // Usamos o axios para fazer as requisições HTTP

describe("Star Wars Starship API", () => {
  it("should fetch the details of the Millennium Falcon", async () => {
    const response = await axios.get("https://swapi.dev/api/starships/10/");
    expect(response.status).toBe(200);
    expect(response.data.name).toBe("Millennium Falcon");
  });

  it("should return 404 for an invalid starship", async () => {
    try {
      await axios.get("https://swapi.dev/api/starships/9999/");
    } catch (error) {
      expect(error.response.status).toBe(404);
    }
  });
});
