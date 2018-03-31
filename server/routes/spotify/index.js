// https://developer.spotify.com/web-api/
// https://github.com/thelinmichael/spotify-web-api-node
const router = require('express').Router();
const SpotifyWebApi = require('spotify-web-api-node');
const apiKeys = require('../../../config/api.config');

// requested privileges
const scopes = [
  'user-read-private',
  'playlist-modify-public',
  'playlist-modify-private',
  'playlist-read-collaborative',
  'user-read-currently-playing'
];

const spotifyApi = new SpotifyWebApi({
  clientId: apiKeys.spotify.client_id,
  clientSecret: apiKeys.spotify.client_secret,
  redirectUri: 'http://localhost:8080/api/spotify/loginCallback'
});


router.get('/login', function(req, res, next) {
  // create the authorization URL
  let state = 'spotify_auth_state';
  let authorizeURL = spotifyApi.createAuthorizeURL(scopes, state);

  res.cookie('state', state);

  // return authorization URL
  res.send({authorizeURL});
});

router.get('/loginCallback', function(req, res, next) {
  let authCode = req.query.code || null;

  // retrieve and store the access token and a refresh token
  spotifyApi.authorizationCodeGrant(authCode)
    .then(function(data) {
      let accessToken = data.body['access_token'];
      let refreshToken = data.body['refresh_token'];
      // set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(accessToken);
      spotifyApi.setRefreshToken(refreshToken);

      return res.status(200).json({accessToken, refreshToken});
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

router.get('/:username/getPlaylists', function(req, res, next) {
  spotifyApi.getUserPlaylists(req.params.username)
    .then(function(data) {
      console.log('Retrieved playlists', data.body);
      res.send(data.body);
    },function(err) {
      console.log('Something went wrong!', err);
    });
});

module.exports = router;