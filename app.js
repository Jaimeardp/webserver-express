const express = require('express');
const app = express();
const hbs = require('hbs');
require('./hbs/helpers');

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'))

//Para heredar templates
hbs.registerPartials(__dirname + '/views/partials')
// Motor de plantillas de express
app.set('view engine', 'hbs');



app.get('/', (req, res) => {
    res.render('home', {
        nombre : 'Jaime',
    });
});

app.get('/about', (req, res) => {
    res.render('about');
});

/*app.get('/', (req, res) => {
    //res.send('Hello wordl!');
    let obj = {
        nombre : 'Jaime',
        edad : 21,
        url : req.url
    }
    //Internamente la funcion send, va detectar un objeto y lo va serializar en formato json
    res.send(obj); 
});*/

/*app.get('/data', (req, res) => {
  res.send('Hello data');
});*/

app.listen(port, () => {
    console.log(`Escuchando en el puerto ${port}`);
});


// npm start
// npm run nodemon

//Iniciar repositorio
// Subir los cambios
//logearse con heroku