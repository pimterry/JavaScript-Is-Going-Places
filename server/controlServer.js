var restify = require('restify');
var arDroneLibrary = require('ar-drone');
var server = restify.createServer();
server.use(restify.CORS());

server.get("/takeoff", function (req, res) {
  arDroneLibrary.createClient().takeoff();  
  res.send("OK");
});

server.get("/showoff", function (req, res) {
  var drone = arDroneLibrary.createClient();
  drone.up(0.5);

  drone.after(2000, function () {
      drone.animate('flipAhead', 15);
  }).after(1000, function () {
      drone.stop();
  });
  res.send("OK");
});

server.get("/land", function (req, res) {
  arDroneLibrary.createClient().land();
  res.send("OK");
});

server.listen(8001);