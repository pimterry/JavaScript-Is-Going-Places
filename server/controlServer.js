var restify = require('restify');
var drone = require('ar-drone').createClient();
var server = restify.createServer();
server.use(restify.CORS());

server.get("/takeoff", function (req, res) {
  drone.takeoff();  
  res.send("OK");
});

server.get("/showoff", function (req, res) {  
  drone.up(0.4);

  drone.after(1000, function () {
      drone.stop();
      drone.right(0.3);
  }).after(1000, function () {
      drone.stop();
      drone.left(0.3)
  }).after(1200, function () {
      drone.stop();
  }).after(10000, function () {
      drone.land();
  });
  res.send("OK");
});

server.listen(8001);