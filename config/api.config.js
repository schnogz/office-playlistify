// Spotify api keys
// Managed via https://developer.spotify.com/my-applications
module.exports = {
  spotify: {
    client_id: process.env.spotify_client_id ? process.env.spotify_client_id : '',
    client_secret: process.env.spotify_client_secret ? process.env.spotify_client_secret : ''
  }
};