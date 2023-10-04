import Store from "./store";

export default class Category {
    private title: string;
    private owner: Store;
    private description: string;

    constructor(title: string, owner: Store, description: string) {
        this.title = title;
        this.owner = owner;
        this.description = description;
    }

    get slug(): string {
        return this.title.split(" ").join("-").toLowerCase();
    }
}
