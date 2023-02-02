/**
 * server file
 */
import express from "express";
import bodyParser from "body-parser";
import cors from 'cors';

import config from './config';
import routes from './api/routes';

const app = express();
const port = config.PORT;

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// mount api v1 routes
app.use('/v1', routes);

app.listen(port, () => {
    console.log("My port: " + port);
});

export default app;