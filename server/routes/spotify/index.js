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

  // redirect to authorization URL
  res.redirect(authorizeURL);
});

router.get('/loginCallback', function(req, res, next) {
  let authCode = req.query.code || null;

  // retrieve and store the access token and a refresh token
  spotifyApi.authorizationCodeGrant(authCode)
    .then(function(data) {
      // set the access token on the API object to use it in later calls
      spotifyApi.setAccessToken(data.body['access_token']);
      spotifyApi.setRefreshToken(data.body['refresh_token']);

      // retrieve user data
      spotifyApi.getMe()
        .then(function(data) {
          res.send({
            access_token: spotifyApi.getAccessToken(),
            refresh_token: spotifyApi.getRefreshToken(),
            user: data.body
          });
        }, function(err) {
          return res.status(500).json({ error: 'Spotify user fetch failed', stacktrace: err });
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

router.get('/user/getPlaylists', function(req, res, next) {
  console.log(req);

  spotifyApi.getUserPlaylists('schneida_04')
    .then(function(data) {
      console.log('Retrieved playlists', data.body);
      res.send(data.body);
    },function(err) {
      console.log('Something went wrong!', err);
    });
});

module.exports = router;