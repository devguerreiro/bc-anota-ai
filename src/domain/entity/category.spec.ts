import Category from "./category";
import Store from "./store";

test("should return the title separated by - and in lowercase", () => {
    // given
    const owner = new Store("Store 1");
    const category = new Category("Category 1", owner, "Description");

    // when
    const slug = category.slug;

    // assert
    expect(slug).toEqual("category-1");
});
