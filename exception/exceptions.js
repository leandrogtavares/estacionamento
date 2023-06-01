class Exception {
    constructor(message) {
        this.message = message
    }

    toString() {
        return `${this.contructor.name} - ${this.message}`
    }
}

export class InvalidArgumentValue extends Exception { }

export class InvalidArgumentType extends Exception { }