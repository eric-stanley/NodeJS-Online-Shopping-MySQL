const express = require('express');
const bodyParser = require('body-parser');
const favicon = require('serve-favicon');
const path = require('path');

const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(favicon(__dirname + '/favicon.ico'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
 res.status(404).render('404', {
  title: 'Page not found',
  path: '/'
 });
});

app.listen(3000);