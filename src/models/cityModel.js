import mongoose from 'mongoose';

const citySchema = new mongoose.Schema(
  {
    // _id: {
    //   type: mongoose.Schema.Types.ObjectId,
    // },
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
