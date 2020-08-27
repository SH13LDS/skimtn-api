const Mountain = require('../models/Mountain');

// @desc Get all mountains
// @route GET /api/v1/mountains
// @access Public
exports.getMountains = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all mountains' });
};

// @desc Get single mountain
// @route GET /api/v1/mountains/:id
// @access Public
exports.getMountain = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Show mountain ${req.params.id}` });
};

// @desc Create new mountain
// @route POST /api/v1/mountains/
// @access Private
exports.createMountain = async (req, res, next) => {
  try {
    const mountain = await Mountain.create(req.body);

    res.status(201).json({
      success: true,
      data: mountain,
    });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Update mountain
// @route PUT /api/v1/mountains/:id
// @access Private
exports.updateMountain = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Update mountain ${req.params.id}` });
};

// @desc Delete mountain
// @route DELETE /api/v1/mountains/:id
// @access Private
exports.deleteMountain = (req, res, next) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete mountain ${req.params.id}` });
};
