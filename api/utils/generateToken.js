const jwt = require('jsonwebtoken');

function generateAccessToken(username) {
	return jwt.sign(username, process.env.TOKEN_SECRET);
}

generateAccessToken(process.env.USER);
