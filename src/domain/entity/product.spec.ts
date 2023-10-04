import Store from "./store";
import Product from "./product";
import Category from "./category";

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

test("should be able to change the product category", () => {
    // given
    const product = createProduct();
    const newCategory = new Category(
        "Category 2",
        product.owner,
        "Description"
    );

    // when
    product.setCategory(newCategory);

    // assert
    expect(product.getCategory()).toEqual(newCategory);
});

test("should return the title separated by - and in lowercase", () => {
    // given
    const product = createProduct();

    // when
    const slug = product.slug;

    // assert
    expect(slug).toEqual("product-1");
});
