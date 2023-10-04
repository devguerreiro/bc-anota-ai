import express from "express";
import bodyParser from "body-parser";

import OwnerRoute from "./application/controller/owner";

const app = express();

app.use(bodyParser.json());

app.use("/api/v1", OwnerRoute);

export default app;
