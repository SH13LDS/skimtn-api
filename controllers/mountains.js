const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');
const Mountain = require('../models/Mountain');

// @desc Get all mountains
// @route GET /api/v1/mountains
// @access Public
exports.getMountains = asyncHandler(async (req, res, next) => {
  const mountains = await Mountain.find();
  res
    .status(200)
    .json({ success: true, count: mountains.length, data: mountains });
});

// @desc Get single mountain
// @route GET /api/v1/mountains/:id
// @access Public
exports.getMountain = asyncHandler(async (req, res, next) => {
  const mountain = await Mountain.findById(req.params.id);

  if (!mountain) {
    // is formatted object id but is not in the database
    return next(
      new ErrorResponse(`Mountain with id of ${req.params.id} not found`, 404)
    );
  }

  res.status(200).json({ success: true, data: mountain });
});

// @desc Create new mountain
// @route POST /api/v1/mountains/
// @access Private
exports.createMountain = asyncHandler(async (req, res, next) => {
  const mountain = await Mountain.create(req.body);

  res.status(201).json({
    success: true,
    data: mountain,
  });
});

// @desc Update mountain
// @route PUT /api/v1/mountains/:id
// @access Private
exports.updateMountain = asyncHandler(async (req, res, next) => {
  const mountain = await Mountain.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  if (!mountain) {
    return next(
      new ErrorResponse(`Mountain with id of ${req.params.id} not found`, 404)
    );
  }

  res.status(200).json({ success: true, data: mountain });
});

// @desc Delete mountain
// @route DELETE /api/v1/mountains/:id
// @access Private
exports.deleteMountain = asyncHandler(async (req, res, next) => {
  const mountain = await Mountain.findByIdAndDelete(req.params.id);

  if (!mountain) {
    return next(
      new ErrorResponse(`Mountain with id of ${req.params.id} not found`, 404)
    );
  }

  res.status(200).json({ success: true, data: {} });
});
