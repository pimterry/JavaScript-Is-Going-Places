var deck = bespoke.from('article', {
  keys: true,
  touch: true,
  scale: true,
  hash: true,
  state: true
});

var server = "http://localhost:8001";

deck.on('activate', function (event) {
  var slideData = $(event.slide).data();  
  if (slideData["controlUrl"]) {
    $.get(server + slideData["controlUrl"]);
  }
});