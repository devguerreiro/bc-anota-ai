import Store from "./store";
import Category from "./category";

export default class Product {
    readonly title: string;
    readonly owner: Store;
    private category: Category;
    readonly price: number;
    readonly description: string;

    constructor(
        title: string,
        owner: Store,
        category: Category,
        price: number,
        description: string
    ) {
        this.title = title;
        this.owner = owner;
        this.category = category;
        this.price = price;
        this.description = description;
    }

    get slug(): string {
        return this.title.split(" ").join("-").toLowerCase();
    }

    setCategory(category: Category): void {
        this.category = category;
    }

    getCategory(): Category {
        return this.category;
    }
}
