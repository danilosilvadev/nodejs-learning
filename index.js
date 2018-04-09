const express = require('express');
const app = express();
const cookieSession = require('cookie-session');
const passport = require('passport');
require('./models/User'); //models before services to work
require('./services/passport');
const mongoose = require('mongoose');
const keys = require('./config/keys');

//cookie before call the passport session, OMG SO MUCH ORDER
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

//initialize passport before send to the route
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect(keys.mongoURI);

//send to the route after initialize passport
require('./routes/authRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);
