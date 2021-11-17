const express = require('express')
const bodyParser = require('body-parser');
const films = require('./controllers/films'); //Controllers para llamar a la carpeta+films para llamar al archivo
const app = express()
const port = 3000
app.set('view engine', 'pug');
app.set('views','./views');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
/***********Enrutamiento ************/
//con este get llamamos al home
app.get('/', films.getHome);
//con este post nos traemos los datos de la peli
app.post('/film', films.findFilms);
app.listen(port, () => {
console.log(`Example app listening at http://localhost:${port}`)
})