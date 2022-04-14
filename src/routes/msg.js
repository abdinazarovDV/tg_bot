const router = require('express').Router();
const Controller = require('../controllers/msg.js');

router.route("/")
    .post(Controller.MessageController)

module.exports = router;