//react_calc_controller.js
const path = require('path');
const BUILD_DIR = path.resolve(__dirname, '../build');
const sendmail = require('sendmail')({silent: true});

module.exports = {
  // simple(req, res) {
  //   res.send("Welcome to React-Calculator");
  // },

  landing(req, res) {
    res.sendFile(`${BUILD_DIR}/index.html`);
  },

  sendEmail(req, res) {
    console.log("send email called", req.body.emailAddr, req.body.message);
    res.send('contact email received');

    sendmail({
      from: 'no-reply@yourdomain.com',
      to: 'h88k988-reactcalculator@yahoo.com',
      subject: 'test sendmail',
      html: 'Mail of test sendmail '
    }, (err, reply) => {
      console.log(err && err.stack);
      console.dir(reply);
    });
  }
}