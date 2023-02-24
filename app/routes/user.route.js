const express = require('express');
const contacts = require('../controllers/user.controllers');

const router = express.Router();

router.route('/')
  .post(contacts.create)
  .delete(contacts.deleteAll);

router.route('/register')
  .get(contacts.register);

router.route("/login")
  .post(contacts.login)

  router.route("/logout")
  .post(contacts.logout)
  
module.exports = router;