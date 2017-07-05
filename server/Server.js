var express = require('express');
var app = express();
var path = require('path');
var publicPath = path.join(__dirname, '../public');
var imagesPath = path.join(__dirname, '../public/images');

const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(express.static(imagesPath));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


