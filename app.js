const express = require('express')
const hbs = require('express-handlebars')
const bodyParser = require('body-parser')
const path = require('path')
const db = require('./config/database');
const morgan = require('morgan');

//dev logging middleware



const app = express();


app.use(morgan('dev'));
//Handlebars
// view engine setup
app.set('view engine', 'hbs');

app.engine( 'hbs', hbs( {
  extname: 'hbs',
  defaultView: 'default',
  layoutsDir: __dirname + '/views/layouts/',
  partialsDir: __dirname + '/views/partials/'
}));

//set static folder

app.use(express.static(path.join(__dirname, 'public')));

db
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

app.get('/', (req, res) => res.send(('INDEX')))



//Gig routes
app.use('/gigs', require('./routes/gigs'))





const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`App listening on port ${PORT}!`));

