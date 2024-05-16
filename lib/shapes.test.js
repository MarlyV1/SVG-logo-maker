const { Circle, Square, Triangle} = require('./shapes');


describe('Shape Test Suite',  () => {
    describe('Circle Render Test', () => {
        it('', () => {
            const shape = new Circle("purple");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="purple" />');
        })
    })

    describe('Square Render Test', () => {
        it('', () => {
            const shape = new Square("green");
            expect(shape.render()).toEqual('<rect x="15" y="15" width="150" height="150" fill="green" />');
        })
    })

    describe('Triangle Render Test', () => {
        it('', () => {
            const shape = new Triangle("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 182 56, 182" fill="blue" />');
        })
    })
})