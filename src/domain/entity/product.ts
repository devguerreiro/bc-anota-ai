import Store from "./store";
import Category from "./category";

export default class Product {
    private title: string;
    private owner: Store;
    private category: Category;
    private price: number;
    private description: string;

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

    getOwner(): Store {
        return this.owner;
    }
}
