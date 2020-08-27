const express = require('express');
const {
  getMountains,
  getMountain,
  createMountain,
  updateMountain,
  deleteMountain,
} = require('../controllers/mountains');

const router = express.Router();

router.route('/').get(getMountains).post(createMountain);

router
  .route('/:id')
  .get(getMountain)
  .put(updateMountain)
  .delete(deleteMountain);

module.exports = router;
