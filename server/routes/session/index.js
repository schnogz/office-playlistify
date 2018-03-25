// https://developer.spotify.com/web-api/
// https://github.com/thelinmichael/spotify-web-api-node
const router = require('express').Router();
const SpotifyWebApi = require('spotify-web-api-node');
const apiKeys = require('../../../config/api.config');

const redirect_uri = 'http://localhost:3001/api/spotify/loginCallback'; // login callback URL
const scopes = ['user-read-private', 'user-read-email']; // requested privileges

const spotifyApi = new SpotifyWebApi({
  clientId: apiKeys.client_id,
  clientSecret: apiKeys.client_secret,
  redirectUri: redirect_uri
});

router.get('/login', function(req, res, next) {
  // create the authorization URL
  let state = 'spotify_auth_state';
  let authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

  res.cookie('state', state);

  // redirect to authorization URL
  res.redirect(authorizeURL);
});

router.get('/loginCallback', function(req, res, next) {
  let code = req.query.code || null;
  //var state = req.query.state || null;
  //var storedState = req.cookies ? req.cookies['state'] : null;

  // retrieve and store the access token and a refresh token
  spotifyApi.authorizationCodeGrant(code)
    .then(function(data) {
      // set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);

      res.send({
        access_token: spotifyApi.getAccessToken(),
        refresh_token: spotifyApi.getRefreshToken()
      });
    }, function(err) {
      return res.status(500).json({ error: 'Spotify auth callback failed', stacktrace: err });
    });
});

router.get('/refresh', function(req, res, next) {
  spotifyApi.refreshAccessToken()
    .then(function(data) {
      // save the new access token
      spotifyApi.setAccessToken(data.body['access_token']);
    }, function(err) {
      res.status(500).json({ error: 'Spotify auth token refresh failed', stacktrace: err });
    });
});

module.exports = router;