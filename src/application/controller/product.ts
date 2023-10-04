import express, { Request, Response } from "express";

const route = express.Router();

route.put("/product/:slug", (req: Request, res: Response) => {
    res.sendStatus(200);
});

export default route;
