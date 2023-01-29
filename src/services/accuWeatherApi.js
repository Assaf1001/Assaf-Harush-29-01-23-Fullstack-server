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

    // return [
    //   {
    //     Version: 1,
    //     Key: '182536',
    //     Type: 'City',
    //     Rank: 10,
    //     LocalizedName: 'Athens',
    //     Country: { ID: 'GR', LocalizedName: 'Greece' },
    //     AdministrativeArea: { ID: 'I', LocalizedName: 'Attica' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '316938',
    //     Type: 'City',
    //     Rank: 10,
    //     LocalizedName: 'Ankara',
    //     Country: { ID: 'TR', LocalizedName: 'Türkiye' },
    //     AdministrativeArea: { ID: '06', LocalizedName: 'Ankara' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '126995',
    //     Type: 'City',
    //     Rank: 11,
    //     LocalizedName: 'Alexandria',
    //     Country: { ID: 'EG', LocalizedName: 'Egypt' },
    //     AdministrativeArea: { ID: 'ALX', LocalizedName: 'Alexandria' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '56912',
    //     Type: 'City',
    //     Rank: 13,
    //     LocalizedName: 'Anqing',
    //     Country: { ID: 'CN', LocalizedName: 'China' },
    //     AdministrativeArea: { ID: 'AH', LocalizedName: 'Anhui' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '59083',
    //     Type: 'City',
    //     Rank: 15,
    //     LocalizedName: 'Anyang',
    //     Country: { ID: 'CN', LocalizedName: 'China' },
    //     AdministrativeArea: { ID: 'HA', LocalizedName: 'Henan' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '102138',
    //     Type: 'City',
    //     Rank: 15,
    //     LocalizedName: 'Anshan',
    //     Country: { ID: 'CN', LocalizedName: 'China' },
    //     AdministrativeArea: { ID: 'LN', LocalizedName: 'Liaoning' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '202438',
    //     Type: 'City',
    //     Rank: 15,
    //     LocalizedName: 'Ahmedabad',
    //     Country: { ID: 'IN', LocalizedName: 'India' },
    //     AdministrativeArea: { ID: 'GJ', LocalizedName: 'Gujarat' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '2093',
    //     Type: 'City',
    //     Rank: 20,
    //     LocalizedName: 'Algiers',
    //     Country: { ID: 'DZ', LocalizedName: 'Algeria' },
    //     AdministrativeArea: { ID: '16', LocalizedName: 'Alger' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '126831',
    //     Type: 'City',
    //     Rank: 20,
    //     LocalizedName: 'Addis Ababa',
    //     Country: { ID: 'ET', LocalizedName: 'Ethiopia' },
    //     AdministrativeArea: { ID: 'AA', LocalizedName: 'Addis Ababa' },
    //   },
    //   {
    //     Version: 1,
    //     Key: '178551',
    //     Type: 'City',
    //     Rank: 20,
    //     LocalizedName: 'Accra',
    //     Country: { ID: 'GH', LocalizedName: 'Ghana' },
    //     AdministrativeArea: { ID: 'AA', LocalizedName: 'Greater Accra' },
    //   },
    // ].map((city) => ({
    //   key: city.Key,
    //   name: city.LocalizedName,
    // }));
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
