const miscHandler = require('./routes/misc');

module.exports = function setRoutes(app) {
  app.get('/', miscHandler.index);
  app.get('/healthz', (req, res) => { return res.sendStatus(200); });
};
