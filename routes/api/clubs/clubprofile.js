const express = require('express');
const router = express.Router();

//@route  GET api/clubprofile
//@desc   Test route
//@access Public

router.get('/', (req, res) => res.send('Club profile route'));

module.exports = router;
