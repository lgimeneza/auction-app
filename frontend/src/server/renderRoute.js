import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { StaticRouter as Router, matchPath } from 'react-router';
import React from 'react';
import ReactDOM from 'react-dom/server';
import helmet from 'react-helmet';
import App from '../shared/app/app.jsx';
import reducers from '../shared/app/redux/reducers/combine';
import thunk from '../shared/app/redux/middleware/thunk';
import routeBank from '../shared/routes/routes';
import renderFullPage from './mainPage'

export default async function renderRoute(req, res) {
	try {
		// create a new redux store on each request
		const store = createStore(reducers, {}, applyMiddleware(thunk));
		let foundPath = null;
		// match request url to our React Router paths and grab component
		let { component } = routeBank.routes.find(
			({ path, exact }) => {
				foundPath = matchPath(req.url,
					{
						path,
						exact,
						strict: false
					}
				)
				return foundPath;
			}) || {};

		// safety check for valid component, if no component we initialize an empty shell
		if (!component)
			component = {};
			
		// safety check for fetchData function, if no function we give it an empty promise
		if (!component.fetchData)
			component.fetchData = () => new Promise(resolve => resolve());
		// our isomorphic application grabbing async data
		await component.fetchData({ store, params: (foundPath ? foundPath.params : {}) });
		// get store state (js object of entire store)
		let preloadedState = store.getState();
		// context is used by react router, empty by default
		let context = {};
		const html = ReactDOM.renderToString(
			<Provider store={store}>
				<Router context={context} location={req.url}>
					<App />
				</Router>
			</Provider>
		)
		// render helmet data aka meta data in <head></head>
		const helmetData = helmet.renderStatic();
		// check context for url, if url exists then react router has ran into a redirect
		if (context.url)
			// process redirect through express by redirecting
			res.redirect(context.status, 'http://' + req.headers.host + context.url);
		else if (foundPath && foundPath.path == '/404')
			// if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
			res.status(404).send(renderFullPage(html, preloadedState, helmetData))
		else
			// else send down page with initial state and meta data
			res.send(renderFullPage(html, preloadedState, helmetData))
	} catch (error) {
		res.status(400).send(renderFullPage('', {}, {}));
	}
}