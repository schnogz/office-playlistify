export default ({ rootUrl, apiUrl, get, post }) => {

  const authorizeApp = () => post({
    url: rootUrl,
    endPoint: 'pin-store',
    data: { format: 'json', method: 'post' }
  });

  const getUserPlaylists = (userName) => get({
    url: rootUrl,
    endPoint: 'pin-store',
    data: { format: 'json', method: 'get', userName }
  });

  return {
    authorizeApp,
    getUserPlaylists
  }
}