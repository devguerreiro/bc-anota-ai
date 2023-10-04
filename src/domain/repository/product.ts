import Product from "../entity/product";

const PRODUCTS: Array<Product> = [];

export default class ProductRepository {
    static create(product: Product): void {
        PRODUCTS.push(product);
    }

    static update(slug: string, data: Product): void {
        const product = PRODUCTS.find((p) => p.slug === slug);
        if (product) {
            product.setCategory(data.getCategory());
        }
    }

    static getBySlug(slug: string): Product | undefined {
        return PRODUCTS.find((p) => p.slug === slug);
    }
}
