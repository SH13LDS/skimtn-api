const Mountain = require('../models/Mountain');

// @desc Get all mountains
// @route GET /api/v1/mountains
// @access Public
exports.getMountains = async (req, res, next) => {
  try {
    const mountains = await Mountain.find();
    res
      .status(200)
      .json({ success: true, count: mountains.length, data: mountains });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Get single mountain
// @route GET /api/v1/mountains/:id
// @access Public
exports.getMountain = async (req, res, next) => {
  try {
    const mountain = await Mountain.findById(req.params.id);

    if (!mountain) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: mountain });
  } catch (error) {
    // res.status(400).json({ success: false });
    next(error);
  }
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
exports.updateMountain = async (req, res, next) => {
  try {
    const mountain = await Mountain.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!mountain) {
      return res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: mountain });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};

// @desc Delete mountain
// @route DELETE /api/v1/mountains/:id
// @access Private
exports.deleteMountain = async (req, res, next) => {
  try {
    const mountain = await Mountain.findByIdAndDelete(req.params.id);

    if (!mountain) {
      res.status(400).json({ success: false });
    }

    res.status(200).json({ success: true, data: {} });
  } catch (error) {
    res.status(400).json({ success: false });
  }
};
