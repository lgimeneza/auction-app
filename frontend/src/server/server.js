import express from 'express';
import renderRouteMiddleware from './renderRoute'

// Configuration ===============================================================
const app = express();
app.use('/dist', express.static('./dist'))

app.get('*', renderRouteMiddleware)

const port = process.env.PORT || 9000;

// Launch ======================================================================
// Starts the Express server on port 9000 and logs that it has started
app.listen(port, function () {
	console.log(`Express server started at: http://localhost:${port}/`); // eslint-disable-line no-console
});