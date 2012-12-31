RdioClient = require('../clients/rdio.js').RdioClient

var rdioToSpotify = function(req, res) {
  // handle requests to turn an Rdio URIs to spotify URIs
  var id = req.url.match(RegExp('[?&]' + 'id' + '=([^&]*)'))[1]; // get value of id param
  var api_response = RdioClient.getObjectFromShortCode(id);
  //if (req.somethingIcareabout)
  res.writeHead(200);
  return "http://somevaliduri";
  //else {
    //res.writeHead(500);
  //return "";
  //}
};

var spotifyToRdio = function(req, res) {

};

exports.rdioToSpotify = rdioToSpotify;
exports.spotifyToRdio = spotifyToRdio;
