const express = require('express');
const path = require('path');
const router = express.Router();

const UserService = require('../services/UserService');
const UserController = require('../controllers/UserController');

const PlanetService = require('../services/PlanetService');
const PlanetController = require('../controllers/PlanetController');

const UserInstance = new UserController(new UserService());

const PlanetInstance = new PlanetController(new PlanetService());

router.get('/', UserInstance.getUser);
router.get('/api/planet/:id', PlanetInstance.getPlanet);

router.get('/home', (req, res) => {
	console.log(__dirname);
	console.log(path.join(__dirname, '..'));

	res.sendFile('index.html', { root: path.join(__dirname, '..') });
});

module.exports = router;
