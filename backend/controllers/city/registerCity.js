const Joi = require('joi');
const { v4: uuidv4 } = require('uuid');

const City = require('../../models/city');

const registerCity = async (req, res) => {
  try {

    const schema = Joi.object({
      city_name: Joi.string().required(),
      state: Joi.string().required(),
      country: Joi.string().required(),
      population: Joi.number(),
      area: Joi.number(),
      address: Joi.string(),
      admin: {
        username: Joi.string().required(),
        password: Joi.string().required(),
      }
    });

    const { error } = schema.validate(req.body);

    const isValid = error === undefined || null;
    if (!isValid) throw new Error(error.message);

    const {city_name, state, country, population, area, address, admin} = req.body;

    const newCity = new City({
      city_id: `CITY-${uuidv4()}`,  
      city_name,
      details: {
        state,
        country,
        population,
        area,
        address
      },
      admin
    });

    await newCity.save();

    return res.status(201).json({ message: 'City registered successfully', city: newCity });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default registerCity;