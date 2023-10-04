import express, { Request, Response } from "express";

import Product from "../../domain/entity/product";
import ProductRepository from "../../domain/repository/product";
import Store from "../../domain/entity/store";
import Category from "../../domain/entity/category";

const route = express.Router();

route.put("/product/:slug", (req: Request, res: Response) => {
    const { slug } = req.params;
    const data = req.body;

    const store = new Store(data.owner.name);
    const category = new Category(
        data.category.title,
        store,
        data.category.description
    );
    const product = new Product(
        data.title as string,
        store,
        category,
        Number(data.price),
        data.description as string
    );

    ProductRepository.update(slug, product);

    res.sendStatus(200);
});

export default route;
