import Category from "../entity/category";
import Product from "../entity/product";

export interface IProductRepository {
    create(product: Product): Product;

    update(product: Product, data: Category): Product;

    getBySlug(slug: string): Product | undefined;

    getAll(): Array<Product>;
}
