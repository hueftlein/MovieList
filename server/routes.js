const router = require('express').Router();
const controller = require('./controller.js');

router.route('/login');

router
  .route('/movies')
  .get((req, res) => {
    controller.fetchAll(req, res);
  })
  .post((req, res) => {
    controller.addMovie(req, res);
  });

router
  .route('/movies/:id')
  .delete((req, res) => {
    controller.delete(req, res);
  })
  .patch((req, res) => {
    console.log('got the patch and ', req.body);
    controller.updateRating(req, res);
  });

router.route('/search').get((req, res) => {
  controller.search(req, res);
});
module.exports = router;
