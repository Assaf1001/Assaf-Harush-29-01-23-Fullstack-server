import axios from 'axios';

const autocompleteURL = `${process.env.RESOURCE_URL}/locations/v1/cities/autocomplete`;
const cityTemperatureURL = `${process.env.RESOURCE_URL}/currentconditions/v1`;

export const getAutocompleteCitiesFromApi = async (q) => {
  try {
    const response = await axios.get(autocompleteURL, {
      params: { apikey: process.env.API_KEY, q },
    });

    return response.data.map((city) => ({
      key: city.Key,
      name: city.LocalizedName,
    }));
  } catch (err) {
    throw new Error(err.response.data.message);
  }
};

export const getCityTemperatureFromApi = async (key) => {
  try {
    const response = await axios.get(`${cityTemperatureURL}/${key}`, {
      params: { apikey: process.env.API_KEY },
    });

    return response.data[0].Temperature.Metric.Value;
  } catch (err) {
    throw new Error(err);
  }
};
