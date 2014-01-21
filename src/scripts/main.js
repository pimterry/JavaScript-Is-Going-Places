var deck = bespoke.from('article', {
  keys: true,
  touch: true,
  scale: true,
  hash: true,
  state: true
});

deck.on('activate', function (event) {
  var slideData = $(event.slide).data();
  if (slideData["controlUrl"]) {
    console.log("Hit " + slideData["controlUrl"]);
    $.get("http://localhost:8001" + slideData["controlUrl"]);
  }
});