const http = require('http');
const app = require('./app');
const httpServer = http.createServer(app);
httpServer.listen(80, () => {
	console.log('HTTP Server running on port 80');
});
