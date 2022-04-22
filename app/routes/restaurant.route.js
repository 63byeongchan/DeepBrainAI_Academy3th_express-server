const { write } = require('../controllers/restaurant.controller');
module.exports = x => x.app.get(`${x.url}/restaurant`, write);