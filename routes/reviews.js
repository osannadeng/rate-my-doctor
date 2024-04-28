const router = require('express').Router();
let Reviews = require('../models/reviews.model');

router.route('/').get((req, res) => {
  Reviews.find()
    .then(reviews => res.json(reviews))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const username = req.body.username;
  const password = req.body.password;
  const review = req.body.review;

  const newReviews = new Reviews({
    username,
    password,
    review,
  });

  newReviews.save()
  .then(() => res.json('Review added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;