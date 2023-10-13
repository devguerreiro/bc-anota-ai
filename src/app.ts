import express from "express";
import bodyParser from "body-parser";

import CatalogRoute from "./infra/api/catalog";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", CatalogRoute);

export default app;
