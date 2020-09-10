const axios = require('axios');

class PlanetService {
	constructor() {
		this.url = 'https://swapi.dev';
	}
	async getPlanet(id) {
		const planet = await axios.get(`${this.url}/api/planets/${id}`);
		return planet.data;
	}
}

module.exports = PlanetService;
