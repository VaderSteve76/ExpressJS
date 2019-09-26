const express = require('express');
const path = require('path');
const app = express();
const exphbs = require('express-handlebars');
//const logger = require('./middleware/Logger');

// Init middleware
//app.use(logger);

// handlebar middleware
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view eingine', 'handlebars');

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// homepage route (handlebars)
app.get('/', (req, res) => res.render('index'));

// set static folder
app.use(express.static(path.join(__dirname, 'public')));

// members api routes
app.use('/api/members', require('./Routes/API/Members'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));