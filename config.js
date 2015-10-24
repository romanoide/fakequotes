
var config = { };

// should end in /
config.rootUrl  = process.env.ROOT_URL                  || 'http://localhost:3000/';

config.facebook = {
    appId:          process.env.FACEBOOK_APPID          || '1455188598111408',
    appSecret:      process.env.FACEBOOK_APPSECRET      || '504f7ef87ed5767c46430a7b21776238',
    appNamespace:   process.env.FACEBOOK_APPNAMESPACE   || 'nodescrumptious',
    redirectUri:    process.env.FACEBOOK_REDIRECTURI    ||  config.rootUrl + 'login/callback'
};

module.exports = config;
