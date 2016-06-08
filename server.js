'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

let app = (0, _express2.default)();
let port = process.env.PORT || 3000;

app.get('*', function (req, res) {
	res.json({
		ipaddress: req.ip.split('::ffff:')[1],
		language: req.headers['accept-language'].split(',')[0],
		software: req.headers['user-agent'].split(')')[0].split('(')[1]
	});
	res.end();
});
app.listen(port, function (err) {
	if (err) {
		console.log('Error!' + err);
		return;
	}

	console.log('Server listening on port ' + port);
});
