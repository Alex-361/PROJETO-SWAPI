// src/tests/film.test.js
const axios = require('axios');

describe("Star Wars Film API", () => {
  it("should fetch the details of the first Star Wars film", async () => {
    const response = await axios.get("https://swapi.dev/api/films/1/");
    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("title", "A New Hope");
  });
});
