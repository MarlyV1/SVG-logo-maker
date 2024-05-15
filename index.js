const inquirer = require('inquirer');
const fs = require('fs');


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
    
})