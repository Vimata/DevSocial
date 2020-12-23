const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  location: {
    type: String,
  },
  role: {
    type: String,
    default: 'Member',
  },
  clubs: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'clubs',
    },
  ],
  bio: {
    type: String,
  },
  social: {
    tiktok: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    instagram: {
      type: String,
    },
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Profile = mongoose.model('userprofile', ProfileSchema);
