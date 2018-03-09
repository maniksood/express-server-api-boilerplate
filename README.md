# NODE-EXPRESS-API/SERVER-Boilerplate

## Setup


Install the dependencies: 
`npm install`

(NOTE: if error occurs use `sudo npm install`)


Install global dependencies: (This will install global dependencies which are used to start the server and development)

`npm run globalnpms`


## Running the app
There are some steps in order to do development and deployment easily.

### Development
#### Code changes watch
To watch the changes in the code during development (both angular and node/express) and compile the changes to javascript/es6, run: (NOTE: Keep this command running in the terminal and use another terminal window to start the server)

`npm run watch`

This command will create a directory named `build` in the roort directory of the project. The `build` directory contains two directories named `client and server`. The `client` directory contains all compiled code of angular and the `server` directory contains all the javascript code compiled from typescript code.

#### Running Server
In order to run a server for development, open a new terminal window and run:

`npm run server`

This command will run the node server on port `4000`. Navigate to `localhost:4000`.

(NOTE: This command uses `nodemon` in order to see the changes in javascript files when compiled from typecript files. If the above command throws an error, install this global dependency `sudo npm install -g nodemon` and try the above command again).

Now the server is up and running and the code is being watch for any changes so that you can have a smooth development expreience.

### Production
#### Code Build
To make the app production ready, run:

`npm run build`

This command will build the angular and node app inside `build` directory in the root directory of the project. The process is same as of development. The `build` directory contains same two directories named `client and server`. But this time, ready for production.

#### Server Run
To make your app running all the time in the background until you pc/server shuts down, run:

`npm run server:nonstop`

This command will run the server on port `4000`. Navigate to `localhost:4000`.

(NOTE: This command utilises `pm2` gloabl dependency. If the command above throws error, run command `npm install -g pm2` and run the above command again.)

In order to stop the server, run:

`pm2 stop www`

