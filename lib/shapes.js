class Shapes {
    constructor(color) {
        this.color = color;
    }
    render() {
        return `<${this.shape} fill=${this.color}`
    }
}

class Circle extends Shapes {
    constructor(color) {
        super(color)
        this.shape = `circle cx="150" cy="100" r="100"`
    }
}

class Square extends Shapes {
    constructor(color) {
        super(color)
        this.shape = `rect x="75" y="15" width="150" height="150"`
    }
}


class Triangle extends Shapes {
    constructor(color) {
        super(color)
        this.shape = `polygon points="150, 18 244, 150 56, 150"`
    }
}

module.exports = {
    Circle,
    Square,
    Triangle
};