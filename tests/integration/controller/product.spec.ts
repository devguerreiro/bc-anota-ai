import request from "supertest";

import app from "../../../src/app";

import ProductRepository from "../../../src/infra/repository/product";

import Store from "../../../src/domain/entity/store";
import Category from "../../../src/domain/entity/category";
import Product from "../../../src/domain/entity/product";

const createProduct = () => {
    const store = new Store("Store 1");
    const category = new Category("Category 1", store, "Description");
    const product = new Product(
        "Product 1",
        store,
        category,
        129.9,
        "Some description"
    );

    return product;
};

const getBaseUrl = (product: Product) => {
    return `/api/v1/${product.getOwner().slug}/catalog/product`;
};

test("should be able to change the product category through PUT request", async () => {
    // given
    const product = createProduct();

    const repo = new ProductRepository();
    repo.create(product);

    const newCategory = new Category(
        "Category 2",
        product.getOwner(),
        "Description"
    );

    const url = getBaseUrl(product) + `/${product.slug}`;
    const data = {
        ...product,
        category: newCategory,
    };

    jest.spyOn(ProductRepository.prototype, "products", "get").mockReturnValue([
        product,
    ]);

    // when
    const response = await request(app).put(url).send(data);

    // assert
    expect(response.status).toBe(200);
    expect(response.body).toEqual(data);
    expect(repo.getBySlug(product.slug)).toEqual(data);
});
