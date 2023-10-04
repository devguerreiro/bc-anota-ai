import express from "express";

import ProductRoute from "./product";

const route = express.Router();

route.use("/:slug/catalog", ProductRoute);

export default route;
