   //load express module
   const express = require('express');

   //create express server
   const app = express();

   const port = 3000;

   //serves static file
   app.use(express.static('public'))

   //set basic route
   app.get('/', (req, res) => console.log(`App listening to port ${port}`));

   []

   //serve static fiLP   xZ◊ÔU7y¥¥¥¥¥¥¥¥¥¥¥¥¥¥¥
   
   
   
   
   
   // var path = require("path");
    // var Router = require('/modules/router/router');
    // var router = new Router(path.join(__dirname,'routes'));



    // module.exports = () => {
    //     readPkgUp().then(result => {
    //         const configPath = path.resolve(process.env.HOME || process.env.USERPROFILE, '.readme-genrc');
    //         const file = fs.existsSync(configPath) ? configPath : path.resolve(__dirname, "fixture/README.ejs");
    //         ejs.renderFile(file, result.pkg, (err, output) => {
    //             if (err) {
    //                 console.log(err);
    //             }
    //             fs.writeFileSync(path.resolve('README.md'), output);
    //         });
    //     });
    // };