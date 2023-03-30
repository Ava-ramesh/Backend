var express = require('express');
var router = express.Router();

var users = [
  {
    email: 'abc@gmail.com', password: 'password'
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("Welcome to my Bankend!!!");
});

router.post('/login', function(req, res){
  let result = users.find(user => user.email == req.body.email);
  if (result) {
    if (result.password == req.body.password) {
      res.status(200).send({
        message: "Successfull Login !!! :)"
      })     
    }else{
      res.status(200).send({
        message: "You've Entered a Incorrect Password :("
      })
    }    
  }else{
    res.status(200).send({
      message: "User not Found!!! :("
    })
  } 
})

module.exports = router;