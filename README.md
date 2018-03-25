[![Dependencies](https://david-dm.org/schnogz/office-playlistify.svg)](https://david-dm.org/schnogz/office-playlistify.svg)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Contributions Welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/schnogz/office-playlistifys/issues)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

# office-playlistify
Share and rank Spotify playlists between coworkers.


## Local Development
1. Ensure Node version >= 8.0 is installed
2. Install and link packages: `npm i` or `yarn`
3. Start application in dev mode: `yarn start`
4. The frontend will now be accessible via browser at `localhost:8080`


### Useful Chrome Extensions
 * [React Developer Tools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) Inspect the React component tree
 * [Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) View/debug Redux state changes


## Production Modes
To build the application for production: `yarn build:prod`
To run the application in production mode: `yarn start:prod`

## Code Quality
Codebase follows the guidelines outlined by the [Javascript Standard Style](https://standardjs.com/rules.html) as well as a few React specfic rules.
Testing is done via [Jest](https://facebook.github.io/jest/) and [Enzyme](http://airbnb.io/enzyme/).

### Commands
 * `yarn lint` Lints entire codebase
 * `yarn lint:fix` Automatically resolves fixable issues via ESLint
 * `yarn test` Runs unit tests
 * `yarn test:watch` Watches for code changes and then runs desired tests
 * `yarn test:debug` Sets debug hooks for unit tests
 * `yarn coverage` Generates a coverage report for codebase
 * `yarn vet` Lints and unit tests codebase

**Notes**
 * `yarn test:debug`: Once ran Node will wait for a debugger to attach before starting the tests. 
 To attach, simply open your browser and go to chrome://inspect and click on "Open Dedicated DevTools for Node", which will give you a list of available node instances you can connect to. 
 Click on the address displayed in the terminal (usually localhost:9229) and you will be able to debug tests using Chrome's DevTools. 
 * `yarn coverage`: Coverage report results can be found in the following directory: `coverage/index.html`
 
 
## Contribute
Contributions are always appreciated.
