const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');


const questions = [
    {
        type: "input",
        name: "text",
        message: "Please enter the text for your SVG:"
    },
    {
        type: "input",
        name: "textColor",
        message: "What is the color for your SVG text?"
    },
    {
        type: "list",
        name: "shape",
        message: "Please select the shape for your SVG:",
        choices: ["Circle", "Square", "Triangle"]
    },
    {
        type: "input",
        name: "shapeColor",
        message: "What is the color for your SVG shape?"
    }];

inquirer.prompt(questions)
.then((data) => {
   const shape = shapeDetails(data.shape, data.shapeColor);
   const file = generateFile(data, shape);
   renderFile(file);
})

function shapeDetails(shape, color) {
    let newShape;

    if(shape === "Circle") {
        newShape = new Circle(`${color}`);

    } else if(shape === "Square") {
        newShape = new Square(`${color}`);
        
    } else if(shape === "Triangle") {
        newShape = new Triangle(`${color}`)
    }
    return newShape.render();
}

function generateFile(data, shape) {
    return `<svg width="300" height="200">
    
    ${shape}

    <text x="100" y="100" text-anchor="middle" font-size="40" fill="${data.textColor}">${data.text}</text>

    </svg>`
}

function renderFile(file) {
    fs.writeFile('logo.svg', file, (err) => err ? console.err(err) : console.log('Successfully created SVG file'))
}