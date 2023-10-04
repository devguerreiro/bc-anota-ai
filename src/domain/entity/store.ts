export default class Store {
    readonly name: string;

    constructor(name: string) {
        this.name = name;
    }

    get slug(): string {
        return this.name.split(" ").join("-").toLowerCase();
    }
}
