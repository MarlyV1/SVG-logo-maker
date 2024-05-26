const { Circle, Square, Triangle} = require('./shapes');


describe('Shape Test Suite',  () => {
    describe('Circle Render Test', () => {
        it('tests the rendered value for the Circle', () => {
            const shape = new Circle("purple");
            expect(shape.render()).toEqual('<circle cx="150" cy="100" r="100" fill="purple" />');
        })
    })

    describe('Square Render Test', () => {
        it('tests the rendered value for the Square', () => {
            const shape = new Square("green");
            expect(shape.render()).toEqual('<rect x="75" y="15" width="150" height="150" fill="green" />');
        })
    })

    describe('Triangle Render Test', () => {
        it('tests the rendered value for the Triangle', () => {
            const shape = new Triangle("blue");
            expect(shape.render()).toEqual('<polygon points="150, 18 244, 150 56, 150" fill="blue" />');
        })
    })
})