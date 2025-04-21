class StringBuilder {
    #value;
    constructor(value) {
        this.#value = value;
    }

    getValue(value) {
        return this.#value;
    }
    padEnd(newValue) {
        this.#value += newValue;
    }

    padEnd(newValue) {
        this.#value = newValue + this.#value;
    }

    padBoth() {
        this.#value = newValue + this.#value + newValue;
    }
}

const builder = new StringBuilder(".");
console.log(builder.getValue()); // "."
builder.padStart("^");
console.log(builder.getValue()); // "^."
builder.padEnd("^");
console.log(builder.getValue()); // "^.^"
builder.padBoth("=");
console.log(builder.getValue()); // "=^.^="