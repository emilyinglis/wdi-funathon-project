var express = require('express'),
    router  = express.Router();

var usersController = require('../controllers/usersController');
var authenticationsController = require('../controllers/authenticationsController');

router.post('/login', authenticationsController.login);
router.post('/register', authenticationsController.register);

// Login and register welcome page - working
router.route('/welcome')

// Calendar / landing page (logged in)
router.route('/')

// Must have:
 // / (calendar)
 // welcome - login or register
 // -->login - presently have but will turn welcome page into login / register with $http
 // -->register - presently have but will turn welcome page into login / register with $http
 
// Nice to have:
 //my profile - nice to have
 // router.route('/users/:id') 
 //   .get(usersController.usersShow)
 //   .patch(usersController.usersUpdate)
 //   .delete(usersController.usersDelete)

module.exports = router;