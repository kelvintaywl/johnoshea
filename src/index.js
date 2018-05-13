const app = require('./app');

const port = parseInt(process.env.SERVER_PORT, 10) || 3000;
app.listen(port, () => {
  console.log('App listening on :' + port);
});
