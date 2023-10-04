import Store from "./store";

export default class Category {
    readonly title: string;
    readonly owner: Store;
    readonly description: string;

    constructor(title: string, owner: Store, description: string) {
        this.title = title;
        this.owner = owner;
        this.description = description;
    }

    get slug(): string {
        return this.title.split(" ").join("-").toLowerCase();
    }
}
