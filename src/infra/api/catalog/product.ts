import { Request, Response, Router } from "express";

import ProductRepository from "../../repository/product";

import ProductController from "../../../controller/product";

import Store from "../../../domain/entity/store";
import Category from "../../../domain/entity/category";

const ProductRoute = Router();

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

ProductRoute.put("/product/:slug", (req: Request, res: Response) => {
    const { slug } = req.params;
    const { category } = <IBody>req.body;

    const owner = new Store(category.owner.name);
    const newCategory = new Category(
        category.title,
        owner,
        category.description
    );

    const repo = new ProductRepository();
    const updatedProduct = new ProductController(repo).update(
        slug,
        newCategory
    );

    res.status(200);
    res.send(updatedProduct);
});

export default ProductRoute;
