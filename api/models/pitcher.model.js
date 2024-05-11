import mongoose from "mongoose";

const pitcherSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
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
    startupName: {
      type: String,
      required: true,
    },
    stage: {
      type: String,
      enum: ['Early Stage', 'Mature'],
    //   required: true,
    },
    verificationStatus: {
      type: String,
      enum: ['Pending', 'Verified'],
    //   required: true,
    },
    profit: {
      type: Number,
      default: 0,
    },
    totalValuation: {
      type: Number,
      default: 0,
    },
    foundedAt: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true }
);

// Virtual property to calculate the age of the company
pitcherSchema.virtual('age').get(function() {
  const now = new Date();
  const foundedAt = new Date(this.foundedAt);
  const diffTime = Math.abs(now - foundedAt);
  return Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); // Calculating years
});

const Pitcher = mongoose.model('Pitcher', pitcherSchema);

export default Pitcher;
