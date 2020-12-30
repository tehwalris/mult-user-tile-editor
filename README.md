# Vertiled

Vertiled is a collaborative online editor for tile-based worlds that we ([Moritz Schneider](https://github.com/bazumo), me and a few others) hacked together during [rc3](https://events.ccc.de/2020/09/04/rc3-remote-chaos-experience/). It supports maps in the [Tiled (TMX) map format](https://doc.mapeditor.org/en/stable/reference/tmx-map-format/), but only a subset of their features. The tile rendering is done by (a slightly modified) [gl-tiled](https://github.com/englercj/gl-tiled). The name is a play on the German word "verteilt", which means "distributed".

## Demo

You can try a [**demo instance here**](https://vertiled.do.walr.is/).

## Getting started

### Initial setup

You will need to install [Node.js](https://nodejs.org) (we used v15) and [Yarn](https://yarnpkg.com/) (v1) on your system.

### Running for development

Start the following commands, with each line in a separate terminal:

```bash
cd gl-tiled && yarn watch
cd vertiled-shared && yarn build --watch
cd vertiled-server && yarn build --watch
cd vertiled-server && nodemon -w dist dist/index.js
cd vertiled-client && yarn start
```

This will start the frontend (most likely) on [localhost:3000](localhost:3000) and the server on [localhost:8088](localhost:8088).

### Running in production

**This project is not for serious public deployments**. It is something we quickly hacked together, so it is only suitable for using with a group of friends. There is no access control or secure separation of users built in, so you should deploy this application only on your local network or behind a VPN. You might want to add a proxy server in front for authentication and HTTPS.

To run it locally:

```bash
yarn
yarn workspaces build
cd vertiled-server
node dist/index.js
```

or via docker:

```bash
docker build -t vertiled .
docker run -p 80:5000 vertiled:latest
```
