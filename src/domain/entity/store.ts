export default class Store {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    get slug(): string {
        return this.name.split(" ").join("-").toLowerCase();
    }
}
