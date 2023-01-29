import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true, uniqe: true },
    favorites: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'City',
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model('User', userSchema);

export default User;
