var arDroneLibrary = require('ar-drone');
var drone = arDroneLibrary.createClient();

drone.stop();
drone.land();