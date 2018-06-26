# Isomorphic SSR + React + Redux Auction Demo App

### This project explores how to do an Isomorphic Server Side Rendering App with React + Redux combined with events on client side with socket.io 

[Documentation](docs)

[Demo App](https://intense-plains-98825.herokuapp.com/)

To try out locally the project:

Run api server (Need a mongodb started)

```
$ git clone https://github.com/lgimeneza/auction-app.git
$ cd auction-app/server/api
$ npm install
$ npm start
```

Run frontend app

```
$ cd ../../client 
$ npm install
$ cd ../frontend 
$ npm install
$ npm start
```

Go to http://localhost:9000 to get the code up and running

## Resources
Here are some resources that helped me to set up the project:

* [Get an isomorphic web app up and running in 5 minutes](https://hackernoon.com/get-an-isomorphic-web-app-up-and-running-in-5-minutes-72da028c15dd)
* [technology-ebay-de/universal-react-router4](https://github.com/technology-ebay-de/universal-react-router4/tree/master/src/shared)
* [zacfukuda/universal-app-react-router](https://github.com/zacfukuda/universal-app-react-router)
* [React Router training on server rendering](https://reacttraining.com/react-router/web/guides/server-rendering)
* [isomorphic-dev-js](https://github.com/isomorphic-dev-js/complete-isomorphic-example)
* [EmileCantin's blog](https://blog.emilecantin.com/web/react/javascript/2017/05/16/ssr-react-router-4-webpack-code-split.html)
* Elyse Kolker Gordon's Slides: [SlideShare](https://www.slideshare.net/ElyseKolkerGordon/building-universal-web-apps-with-react-72715124) / [GoogleDoc](https://docs.google.com/presentation/d/1zxF2wvvOxctqqt78ho5D2lCKkU8R2X0wcY_O8TIbVGA/pub?start=false&loop=false&delayms=10000)
* [React Isomorphic/Universal App](https://codeburst.io/react-isomorphic-universal-app-w-nodejs-redux-react-router-v4-be80aa57dcaf)