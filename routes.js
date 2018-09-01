var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/user1_data', function(req, res, next){
  console.log("gettign data");
  axios.get('https://storage.googleapis.com/armorblox-public/small.json')
  // axios.get('https://storage.googleapis.com/armorblox-public/emails.json')
  .then(response => {
    // console.log(response.data);
    res
    .status(200)
    .json(response.data);
  })
  .catch(error => {
    console.log(error);
    res
    .status(404);
  });

  console.log("data: "+ d);
});

router.get('/has_changed_password', function(req, res, next){
  console.log('GET : has_changed_password');
  axios.get('http://interview.armorblox.io/api/getFirstTimeLogin')
  .then(response => {
    console.log(response.data);
    res
    .status(200)
    .json(response.data);
  })
  .catch(error => {
    console.log(error);
    res
    .status(404);
  });
});

const data = {
  "change_password" : true
}

router.post('/change_password', function(req, res, next){
  console.log('POST : change_password');
  axios.post('http://interview.armorblox.io/api/setFirstTimeLogin', {"change_password": true})
  .then(response => {
    console.log(response.data);
    res
    .status(200)
    .json({"change_password":true});
  })
  .catch(error => {
    console.log(error);
    res
    .status(404);
  });
});

module.exports = router;

//
