import UpdateProduct from "../application/usecase/UpdateProduct";

import { IProductRepository } from "../domain/repository/product";

import Category from "../domain/entity/category";
import Product from "../domain/entity/product";

export default class ProductController {
    private repo: IProductRepository;

    constructor(repo: IProductRepository) {
        this.repo = repo;
    }

    update(slug: string, data: Category): Product {
        return new UpdateProduct(this.repo).handle(slug, data);
    }
}
