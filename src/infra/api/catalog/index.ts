import { Router } from "express";

import ProductRoute from "./product";

const CatalogRoute = Router();

CatalogRoute.use("/:owner/catalog", ProductRoute);

export default CatalogRoute;
