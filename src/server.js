var express = require('express');
var app = express();
var server = app.listen(80, function(){
    console.log("Express server has started on port 80")
})

let users = [
  {
    id: 1,
    name: 'alice'
  },
  {
    id: 2,
    name: 'bek'
  },
  {
    id: 3,
    name: 'chris'
  }
]


app.get('/users', (req, res) => {
   console.log('who get in here/users');
   res.json(users)
});

app.get('/', function(req, res){
    res.send('Hello World');
});