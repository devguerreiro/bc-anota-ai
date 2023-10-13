import Category from "../../domain/entity/category";
import Product from "../../domain/entity/product";
import { IProductRepository } from "../../domain/repository/product";

export default class ProductRepository implements IProductRepository {
    PRODUCTS: Array<Product>;

    constructor() {
        this.PRODUCTS = [];
    }

    get products(): Array<Product> {
        return this.PRODUCTS;
    }

    create(product: Product): Product {
        this.products.push(product);
        return product;
    }

    update(product: Product, data: Category): Product {
        product.setCategory(data);
        return product;
    }

    getBySlug(slug: string): Product | undefined {
        return this.products.find((p) => p.slug === slug);
    }

    getAll(): Array<Product> {
        return this.products;
    }
}
