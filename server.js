var http = require('http');
var translators = require('./handlers/uri_translators.js');

var rdioOauthCallback = function(req) {
  //console.log(req);
};

var requestListener = function (req, res) {
  if (req.method === 'GET') {
    if (req.url.match(/^\/rdio_to_spotify.*$/)) {
      res.end(translators.rdioToSpotify(req, res));
    } else if (req.url.match(/^\/spotify_to_rdio.*$/)) {
      res.end(translators.spotifyToRdio(req, res));
    } else if (req.url.match(/rdio_callback/)) {
      rdioOauthCallback(req);
      res.writeHead(200);
      res.end();
    } else {
      res.writeHead(404);
      res.end();
    }
  } else {
    res.writeHead(404);
    res.end();
  }
};

var server = http.createServer(requestListener);

server.listen(process.env.PORT || 7777, process.env.IP || "0.0.0.0");
