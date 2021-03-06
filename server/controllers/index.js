var models = require('../models');
var bluebird = require('bluebird');


module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(data){
        res.json(data);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      var message = req.body;
      models.messages.post(message, function(){
        res.send("success");
      });
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {
      var user = req.body;
      models.users.post(user, function() {
        res.send("success");
      });
    }
  }
};

