let express = require("express");
let bodyParser = require("body-parser");
let logger = require("morgan");
let app = express();
// let mongoose = require("mongoose");
let routes = require("./controllers/contributorsControllers.jsx");
// let cors = require('cors');
let lessMiddleware = require('less-middleware');

let PORT = process.env.PORT || 7000;

// let db = require("./models");

app.use(logger("dev"));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.raw({type:"application/x-www-form-urlencoded"}));

app.use(bodyParser.text({ type:"text/html"}));

app.use(bodyParser.json({type: "application/*+json"}));

// app.use(lessMiddleware({
//   src      : __dirname + "/public/styles/styles.less",
//   compress : true
// }));
// app.use(lessMiddleware(
//   __dirname + 'public/styles/less', // source
//   { dest: __dirname + 'public/styles/css' }, // options
//   {}, // parser
//   { compress: 'auto' } // complier
// ));

app.use(express.static(__dirname + "/public"));


app.use(routes);

// app.configure(function(){
//   //other configuration here...
//   app.use(lessMiddleware({
//     src      : __dirname + "/public",
//     compress : true
//   }));
//   app.use(express.static(__dirname + '/public'));
// });
// app.use(cors());
// app.use(function(req, res, next) {
//   res.header("Access-Control-Allow-Origin", "Access-Control-Allow-Origin: http://localhost:8030");
//   res.header("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   next();
// });

// mongoose.connect("mongodb://localhost/contributors");

app.listen(PORT, () =>
  console.log("Server listening on: http://localhost:" + PORT)
);
