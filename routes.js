var express = require('express');
var router = express.Router();
var axios = require('axios');

router.get('/user1_data', function(req, res, next){
  console.log("gettign data");
  axios.get('https://storage.googleapis.com/armorblox-public/small.json')
  // axios.get('https://storage.googleapis.com/armorblox-public/emails.json')
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

  console.log("data: "+ d);
});

module.exports = router;
