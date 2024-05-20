import mongoose from 'mongoose';
import bcryptjs from 'bcryptjs';

const { Schema } = mongoose;

const investorSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true
  },
  fullName: {
    type: String,
    required: true
  },
  investmentSize: {
    type: String,
    enum: ['0-2L', '2L+'],
    required: true
  },
  sectorPreferences: {
    type: [String],
    required: true
  },
  identification: {
    type: String,
    enum: ['investor', 'advisor'],
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Hash password before saving to database
investorSchema.pre('save', async function (next) {
  try {
    if (this.isModified('password')) {
      const salt = await bcryptjs.genSalt(10);
      this.password = await bcryptjs.hash(this.password, salt);
    }
    next();
  } catch (error) {
    next(error);
  }
});

const Investor = mongoose.model('Investor', investorSchema);

export default Investor;
