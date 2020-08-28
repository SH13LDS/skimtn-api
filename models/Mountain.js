const mongoose = require('mongoose');
const slugify = require('slugify');

const MountainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a name'],
    unique: true,
    trime: true,
    maxlength: [50, 'Name cannot be more than 50 characters'],
  },
  slug: String,
  description: {
    type: String,
    required: true,
    maxlength: [1000, 'Description cannot be more than 1000 characters'],
  },
  website: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  webcamWebsite: {
    type: String,
    match: [
      /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/,
      'Please use a valid URL with HTTP or HTTPS',
    ],
  },
  phone: {
    type: String,
    maxLength: [20, 'Phone number cannot be greater than 20 characters'],
  },
  email: {
    type: String,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please add a valid email',
    ],
  },
  address: {
    type: String,
    required: [true, 'Please add an address'],
  },
  // location: {
  //   // GeoJSON Point
  //   type: {
  //     type: String,
  //     enum: ['Point'],
  //     required: true,
  //   },
  //   coordinates: {
  //     type: [Number],
  //     index: '2dsphere',
  //     required: true,
  //   },
  //   formattedAddress: String,
  //   street: String,
  //   city: String,
  //   state: String,
  //   zipcode: String,
  //   country: String,
  // },
  averageRating: {
    type: Number,
    min: [1, 'Rating must be at least 1'],
    max: [10, 'Rating must can not be more than 10'],
  },
  photo: {
    type: String,
    default: 'no-photo.jpg',
  },
  summitElevation: {
    type: Number,
    default: false,
  },
  verticalDrop: {
    type: Number,
    default: false,
  },
  baseElevation: {
    type: Number,
    default: false,
  },
  averageSnowfallInches: {
    type: Number,
    default: false,
  },
  daysOpenPrevious: {
    type: Number,
    default: false,
  },
  daysOpenProjected: {
    type: Number,
    default: false,
  },
  yearsOpen: {
    type: Number,
    default: false,
  },
  projectedOpening: {
    type: String,
    default: false,
  },
  isOpen: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Create mountain slug from the name
MountainSchema.pre('save', function (next) {
  this.slug = slugify(this.name, { lower: true })
  next();
});

module.exports = mongoose.model('Mountain', MountainSchema);
