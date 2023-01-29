import express from 'express';
import User from '../models/userModel.js';

const router = new express.Router();

router.post('/user/new', async (req, res) => {
  const user = new User(req.body);

  try {
    await user.save();
    res.status(201).send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/user', async (req, res) => {
  const userId = req.body.userId;

  try {
    const user = await User.findOne({ userId });
    await user.populate('favorites');
    res.send(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch('/user/favorites/add', async (req, res) => {
  const { userId, _id } = req.body;

  try {
    const user = await User.findOne({ userId });
    if (!user.favorites.includes(_id)) {
      user.favorites.push(_id);
      await user.save();
    }

    res.send('ok');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch('/user/favorites/remove', async (req, res) => {
  const { userId, _id } = req.body;

  try {
    const user = await User.findOne({ userId });
    user.favorites = user.favorites.filter(
      (city) => city._id.toString() !== _id
    );
    await user.save();

    res.send('ok');
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
