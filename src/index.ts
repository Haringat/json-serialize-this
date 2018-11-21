class Serializable {
    constructor(
        public foo: string,
        public bar: string
    ) {
    }
}

function serialize(key, value) {
    return value;
}

function test() {
    JSON.stringify(new Serializable("x", "y"), function (key) {
        // !!! this should be legal !!!
        return serialize(key, this[key]);
    });
}