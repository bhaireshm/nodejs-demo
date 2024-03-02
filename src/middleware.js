import { join } from 'path';
import logger from 'morgan';
import express from 'express';
import ezjs from '@bhairesh/ez.js';

const { isEmpty } = ezjs;
const { json, urlencoded } = express;
const app = express();

/** ----- Middleware ----- */

// * Logger middleware
app.use(logger('combined'));

// * Request body parser middleware
app.use(json());

// * Decodes encoded request url
app.use(urlencoded({ extended: false }));

// * Static routes (which serves asset files)
app.use("/", express.static(join("..", 'public')));

/** ----- Middleware ----- */

// * Routes
// GET /users
app.get('/users', function (req, res, next) {
  // console.log("req", req.ip);
  // console.log("req.body", req.body);

  // Get data from database

  res.json([{ name: "Harry Potter", house: "Gryffindor" }]);
});

// POST /users
app.post('/login', function (req, res, next) {
  // if (isEmpty(req.body)) 
  console.log("req.body", req.body);

  // database connection4

  // authentication

  res.json({ name: req.body.username });
});

app.listen(3000, function () {
  console.log('listening on http://localhost:3000');
});