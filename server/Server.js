let express = require('express');
let app = express();
let path = require('path');
let publicPath = path.join(__dirname, '../public');
let imagesPath = path.join(__dirname, '../public/images');

const PORT = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.use(express.static(imagesPath));

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});


