//Global Variables

const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("./utils/generateMarkdown");

   const express = require('express');

   //create express server
   const app = express();

   const port = 3000;

   //serves static file
   app.use(express.static('public'))

   //set basic route
   app.get('/', (req, res) => console.log(`App listening to port ${port}`));

   
   //prompt user with questions about the Readme

   function prompts() {
      return inquirer.prompt( [
         {
//name can be section of README to each ### section on readme
//type: the users input
//message is just what we are asking/what the user is answering
            
            type: "input",
            name: "title",
            message: "What is the title of this project?"
         },{
            ype: "input",
            name: "title",
            message: "Please proved links for badges to display."
         },{
            type: "input",
            name: "title",
            message: "Please provide a brief description of this project."
         },{
            ype: "input",
            name: "title",
            message: "Please provide installation instructions for this project."
         },{
            type: "input",
            name: "title",
            message: "How do you use your project?"
         },{
            ype: "input",
            name: "title",
            message: "Please provide a license for this project."
         },{
            type: "input",
            name: "title",
            message: "Who contributed on this project?"
         },{
            type: "input",
            name: "title",
            message: "How would you test this project?"
         },{
            type: "input",
            name: "repository",
            message: "What is your GitHub profile username??"
         },{
            type: "input",
            name: "title",
            message: "What is the link for this projects repository?"
         },
      ]);
   };

//build README with input from user, appending it to name(README section)
   function writeToFile(fileName, data) {
      fs.writeFile(fileName, data, "utf8", function(err) {
   if (err) {
throw err;
}
      console.log(fileName + " was a success!");
   });
}
   

async function generateContent(answers){}

