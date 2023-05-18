const express = require('express');
const path = require('path');
const rootDir = require('./util/path');
const bodyParser = require('body-parser');
const adminRouter = require('./routes/admin');
const shopRouter = require('./routes/shop');
const errorController = require('./controllers/products');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use('/admin', adminRouter);
app.use(shopRouter);

app.use(errorController.get404Error);

app.listen(5500);