/**
 * server file
 */
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";

import config from "./config";
import routes from "./api/routes";

const app = express();
const { PORT, CLIENT } = config;

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Enable CORS - Cross Origin Resource Sharing
app.use(
  cors({
    origin: CLIENT,
  })
);

// Mount api v1 routes
app.use("/v1", routes);

app.listen(PORT, () => {
  console.log("My port: " + PORT, CLIENT);
});

export default app;
