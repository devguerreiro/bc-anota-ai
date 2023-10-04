import Store from "../../../src/domain/entity/store";
import Product from "../../../src/domain/entity/product";
import Category from "../../../src/domain/entity/category";

import ProductRepository from "../../../src/domain/repository/product";

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

beforeEach(() => {
    ProductRepository.PRODUCTS = [];
});

test("should be able to create a new product", () => {
    // given
    const product = createProduct();

    // when
    ProductRepository.create(product);

    // assert
    expect(ProductRepository.getBySlug(product.slug)).toEqual(product);
});

test("should be able to update the category of an existent product", () => {
    // given
    const product = createProduct();
    ProductRepository.create(product);

    const newCategory = new Category(
        "Category 2",
        product.getOwner(),
        "Description"
    );

    // when
    ProductRepository.update(product.slug, newCategory);

    // assert
    const updatedProduct = ProductRepository.getBySlug(product.slug);
    expect(updatedProduct?.getCategory()).toBe(newCategory);
});

test("should be able to retrieve a category by slug", () => {
    // given
    const product = createProduct();
    ProductRepository.create(product);

    // when
    const retrievedProduct = ProductRepository.getBySlug(product.slug);

    // assert
    expect(retrievedProduct).toBe(product);
});

test("should return undefined if the category doesn't exist", () => {
    // given
    const product = createProduct();
    ProductRepository.create(product);

    // when
    const retrievedProduct = ProductRepository.getBySlug("inexistent-product");

    // assert
    expect(retrievedProduct).toBe(undefined);
});
