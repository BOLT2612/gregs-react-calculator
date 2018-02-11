const app = require('./app');

const gRCalcPort = process.env.PORT || 8080;

app.listen(gRCalcPort, () => {
  console.log("GREGS-REACT-CALCULATOR running on port " + gRCalcPort);
});