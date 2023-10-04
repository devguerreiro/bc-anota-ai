import Category from "../entity/category";
import Product from "../entity/product";

export default class ProductRepository {
    static PRODUCTS: Array<Product> = [];

    static create(product: Product): void {
        this.PRODUCTS.push(product);
    }

    static update(slug: string, data: Category): void {
        const product = this.getBySlug(slug);
        if (product) {
            product.setCategory(data);
        }
    }

    static getBySlug(slug: string): Product | undefined {
        return this.PRODUCTS.find((p) => p.slug === slug);
    }
}
