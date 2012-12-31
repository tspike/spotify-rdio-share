var oauthCfg = require('../cfg/oauth.js');
var OAuth = require('oauth').OAuth

var shortcode_callback = function(param) {
  console.log('woohooo!!');
};

var RdioClient = new function() {
  this.oauthClient = new OAuth(
    "http://api.rdio.com/oauth/request_token",
    "http://api.rdio.com/oauth/access_token",
    oauthCfg.rdio_key,
    oauthCfg.rdio_secret,
    '1.0', // oauth version
    "http://4r6f.localtunnel.com/rdio_callback", // callback
    "HMAC-SHA1"
  );

  this.getObjectFromShortCode = function(code) {
    var result = this.oauthClient.post(
      "http://api.rdio.com/1",
      'qma83gwxj6desuv2v3ec97bd',
      '9T8emHXzunzf',
      {
        method: 'getObjectFromShortCode',
        short_code: code
      },
      null,
      shortcode_callback
    );

    return result;
  };
};

exports.RdioClient = RdioClient;
