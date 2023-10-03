import Store from "./store";
import Product from "./product";
import Category from "./category";

test("should be able to change the product category", () => {
    // given
    const store = new Store("Store 1");
    const category = new Category("Category 1", store, "Description");
    const product = new Product(
        "Product 1",
        store,
        category,
        129.9,
        "Some description"
    );
    const newCategory = new Category("Category 2", store, "Description");

    // when
    product.setCategory(newCategory);

    // assert
    expect(product.getCategory()).toEqual(newCategory);
});
