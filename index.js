//Global Variables

const inquirer = require("inquirer");
const fs = require('fs');
const axios = require("./utils/generateMarkdown");

   
   //prompt user with questions about the Readme

   function prompts() {
      //name can be section of README to each ### section on readme
//type: the users input
//message is just what we are asking/what the user is answering
      inquirer.prompt( [
         {
            type: "input",
            name: "title",
            message: "What is the title of this project?"
         },{
            ype: "input",
            name: "badge",
            message: "Please provide links for badges to display."
         },{
            type: "input",
            name: "description",
            message: "Please provide a brief description of this project."
         },{
            ype: "input",
            name: "installation",
            message: "Please provide installation instructions for this project."
         },{
            type: "input",
            name: "use",
            message: "How do you use your project?"
         },{
            type: "list",
            name: "license",
            choices: ['creative commons', 'mit', 'mozilla'],
            message: "Please provide a license for this project."
         },{
            type: "input",
            name: "contributors",
            message: "Who contributed on this project?"
         },{
            type: "input",
            name: "test",
            message: "How would you test this project?"
         },{
            type: "input",
            name: "username",
            message: "What is your GitHub profile username??"
         },{
            type: "input",
            name: "repository",
            message: "What is the link for this projects repository?"
         },
      ]).then(function(answer){
         console.log('answers from our stuff!!', answer)
         var badgeUrl = ''

         if(answer.license ==="mit") {
            badgeUrl = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
         } else if (answer.license ==="mozilla") {
            badgeUrl = '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)'
         } else if(answer.license ==="creative commons") {
            badgeUrl = '[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)'
         }

         console.log('badge url!!!', badgeUrl)






         var fakeReadMe = `
# Title: ${answer.title}
Badge: ${answer.badge}
Description: ${answer.description}
Installation: ${answer.installation}
Use: ${answer.badge}
License: ${badgeUrl}
Contributors: ${answer.contributors}
Test: ${answer. test}
Username: ${answer.username}
Repository: ${answer.repository}
         `
         console.log(fakeReadMe)
         writeToFile('Scott.md', fakeReadMe)

      })
   };

   prompts()

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

