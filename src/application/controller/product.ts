import express, { Request, Response } from "express";

import Product from "../../domain/entity/product";
import ProductRepository from "../../domain/repository/product";
import Store from "../../domain/entity/store";
import Category from "../../domain/entity/category";

const route = express.Router();

interface IBody {
    title: string;
    owner: {
        name: string;
    };
    category: {
        title: string;
        owner: {
            name: string;
        };
        description: string;
    };
    price: number;
    description: string;
}

route.put("/product/:slug", (req: Request, res: Response) => {
    const { slug } = req.params;
    const { category } = <IBody>req.body;

    const newCategory = new Category(
        category.title,
        new Store(category.owner.name),
        category.description
    );

    ProductRepository.update(slug, newCategory);

    res.sendStatus(200);
});

export default route;
