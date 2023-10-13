import { IProductRepository } from "../../domain/repository/product";

import Category from "../../domain/entity/category";
import Product from "../../domain/entity/product";

export default class UpdateProduct {
    private repo: IProductRepository;

    constructor(repo: IProductRepository) {
        this.repo = repo;
    }

    handle(slug: string, data: Category): Product {
        const product = this.repo.getBySlug(slug);
        if (!product) {
            throw new Error("Product not found");
        }
        return this.repo.update(product, data);
    }
}
