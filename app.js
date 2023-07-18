"use strict";
const express = require("express");
const app = express();
const path = require("path");
// const methodOverride = require("method-override");
// const cookieParser = require('cookie-parser');
const configService = require('./services/configService');
// const handlebars = require('express-handlebars');
const pageRoutes = require("./routes/pageRoutes.js");
// const configService = require("./services/configService.js");
const middleware = require("./middleware/middleware");

// app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.join(__dirname, "/views")));
app.use(express.static(path.join(__dirname, "public")));
// app.use(methodOverride("_method"));

///////////// HANDLEBARS SETUP ///////////////
// const hbs = handlebars.create({
//   layoutsDir: __dirname + '/views/layouts',
//   extname: 'hbs',
//   defaultLayout: 'index',
//   partialsDir: __dirname + '/views/partials/',
// })

// Apply Handlebars View Engine Configuration
// app.set('view engine', 'hbs');
// app.engine('hbs', hbs.engine);
// app.use(async (req, res, next) => {
//   const connected = await middleware.
//     next()
// });

app.use(async (req, res, next) => {
  const connected = await middleware.connect(req);
  console.log(`Connection: ${connected}`)
  next();
});

app.use("/", pageRoutes.routes);

app.listen(configService.port, () => {
  console.log(`App listening on ${configService.port}.......`);
});