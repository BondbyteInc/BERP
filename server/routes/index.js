var express = require('express');
var router = express.Router();
var models = require('../models/index');
const path = require('path');
//default path, or start path.
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Express' });
  //console.log(path.join(__dirname, 'foo'));
  res.sendFile(path.join(
    __dirname, '..', '..', 'client', 'views', 'index.html'));
});

router.post('/users', function(req, res) {
  models.User.create({
    email: req.body.email
  }).then(function(user) {
    res.json(user);
  });
});

// get all todos
router.get('/items', function(req, res) {
  models.Item.findAll({}).then(function(items) {
    res.json(items);
  });
});

// get single todo
router.get('/item/:id', function(req, res) {
  models.Item.find({
    where: {
      id: req.params.id
    }
  }).then(function(item) {
    res.json(item);
  });
});

// add new todo
router.post('/items', function(req, res) {
  models.Item.create({
    title: req.body.title,
    UserId: req.body.user_id
  }).then(function(item) {
    res.json(item);
  });
});

// update single todo
router.put('/item/:id', function(req, res) {
  models.Item.find({
    where: {
      id: req.params.id
    }
  }).then(function(item) {
    if(item){
      item.updateAttributes({
        title: req.body.title,
        complete: req.body.complete
      }).then(function(item) {
        res.send(item);
      });
    }
  });
});

// delete a single todo
router.delete('/item/:id', function(req, res) {
  models.Item.destroy({
    where: {
      id: req.params.id
    }
  }).then(function(item) {
    res.json(item);
  });
});

module.exports = router;
