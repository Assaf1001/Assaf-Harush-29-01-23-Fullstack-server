import mongoose from 'mongoose';

const citySchema = new mongoose.Schema(
  {
    key: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
    },
    temperatureInCelcius: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const City = mongoose.model('City', citySchema);

export default City;
