import Store from "./store";

test("should return the title separated by - and in lowercase", () => {
    // given
    const owner = new Store("Store 1");

    // when
    const slug = owner.slug;

    // assert
    expect(slug).toEqual("store-1");
});
