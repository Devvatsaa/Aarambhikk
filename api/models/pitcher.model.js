import mongoose from 'mongoose';

const pitcherSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    fullName: {
      type: String,
      required: true,
    },
    foundationDate: {
      type: Date,
      required: true,
    },
    valuation: {
      type: Number,
      required: true,
    },
    websiteLink: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Pitcher = mongoose.model('Pitcher', pitcherSchema);

export default Pitcher;
