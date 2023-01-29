import express from 'express';
import mongoose from 'mongoose';
import City from '../models/cityModel.js';
import {
  getAutocompleteCitiesFromApi,
  getCityTemperatureFromApi,
} from '../services/accuWeatherApi.js';

const router = new express.Router();

router.get('/autocomplete', async (req, res) => {
  const q = req.query.q;

  try {
    const cities = await getAutocompleteCitiesFromApi(q);

    res.send(cities);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.post('/city', async (req, res) => {
  const { name, key } = req.body;

  try {
    let cityFromDb = await City.findOne({ key });

    if (cityFromDb) {
      return res.send(cityFromDb);
    } else {
      const temp = await getCityTemperatureFromApi(key);
      const newCity = new City({
        name,
        key,
        temperatureInCelcius: temp,
      });

      await newCity.save();
      res.send(newCity);
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

export default router;
