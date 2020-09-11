class PlanetController {
	constructor(planetService) {
		this.planetService = planetService;
	}
	getPlanet = async (req, res) => {
		const id = req.params.id;
		const planet = await this.planetService.getPlanet(id);
		res.json(planet);
	};
}

module.exports = PlanetController;
