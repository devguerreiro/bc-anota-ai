import ProductRepository from "../../../src/infra/repository/product";

import Store from "../../../src/domain/entity/store";
import Product from "../../../src/domain/entity/product";
import Category from "../../../src/domain/entity/category";

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

test("should be able to create a new product", () => {
    // given
    const product = createProduct();
    const repo = new ProductRepository();

    // when
    repo.create(product);

    // assert
    expect(repo.getBySlug(product.slug)).toEqual(product);
});

test("should be able to update the category of an existent product", () => {
    // given
    const product = createProduct();
    const repo = new ProductRepository();

    repo.create(product);

    const newCategory = new Category(
        "Category 2",
        product.getOwner(),
        "Description"
    );

    // when
    repo.update(product, newCategory);

    // assert
    const updatedProduct = repo.getBySlug(product.slug);
    expect(updatedProduct?.getCategory()).toBe(newCategory);
});

test("should be able to retrieve a category by slug", () => {
    // given
    const product = createProduct();
    const repo = new ProductRepository();

    repo.create(product);

    // when
    const retrievedProduct = repo.getBySlug(product.slug);

    // assert
    expect(retrievedProduct).toBe(product);
});

test("should return undefined if the category doesn't exist", () => {
    // given
    const product = createProduct();
    const repo = new ProductRepository();

    repo.create(product);

    // when
    const retrievedProduct = repo.getBySlug("inexistent-product");

    // assert
    expect(retrievedProduct).toBe(undefined);
});
