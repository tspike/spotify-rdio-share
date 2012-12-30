var oauthCfg = require('../cfg/oauth.js');
var OAuth = require('oauth').OAuth

var RdioClient = function() {
  this.oauthClient = new OAuth(
    "http://api.rdio.com/oauth/request_token",
    "http://api.rdio.com/oauth/access_token",
    oauthCfg.rdio_key,
    oauthCfg.rdio_secret,
    '1.0', // oauth version
    "", // callback
    "HMAC-SHA1"
  );
};
