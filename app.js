const express = require('express');
const app = express();

app.get('/', (req, res) => {
	for (var i = 1; i <= 50; i++) {
		res.write(`<p>${i} Soy ${i % 2 === 0 ? 'Par' : 'Impar'}!`);
	}
	
	res.end();
	
})

app.listen(3000, () => console.log('Listening on port 3000!'));