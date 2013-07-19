var express = require('express');
var fs = require('fs');

app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  //response.send('Hello World2!');
  fs.readFile('index.html', 'utf-8', function(err, data){
     if (err){
        return console.log(err);
     }
 
     response.send(data);     
  });

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
