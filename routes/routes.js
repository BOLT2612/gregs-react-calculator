// router

const rcController = require('../controllers/react_calc_controller');
module.exports = (app) => {

  app.get('/', rcController.landing);

  app.get('/landing', rcController.landing);
  app.get('/about', rcController.landing);
  app.get('/background', rcController.landing);
  app.get('/contact', rcController.landing);
  app.get('/calculator', rcController.landing);

  app.post('/send-email', rcController.sendEmail);
}