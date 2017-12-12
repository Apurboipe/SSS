const express = require('express');
const app = express();
var exphbs  = require('express-handlebars');




//----------Middlewire--------------------------
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
app.use(express.static(__dirname + '/'));


//-------------------app function--------------------------
app.get('/', function (req, res) {
  res.render('index');
});







app.listen(3000);
console.log('Express started on port 3000');