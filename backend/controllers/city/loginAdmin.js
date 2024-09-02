const Joi = require('joi');

const City = require('../../models/city');
const {comparePassword} = require('../../utils/passwordManagement');

const registerCity = async (req, res) => {
  try {

    const schema = Joi.object({
      city_name: Joi.string().required(),
      username: Joi.string().required(),
      password: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    const isValid = error === undefined || null;
    if (!isValid) throw new Error(error.message);

    const {city_name, username, password} = req.body;

    const foundAdmin = await City.findOne({ city_name, 'admin.username': username });
    if(!foundAdmin) throw new Error('City not found');

    const isPassRight = await comparePassword(password, foundAdmin.admin.password);
    if(!isPassRight) throw new Error('Invalid credentials');

    return res.status(200).json({ message: 'Admin login successfull', city: foundAdmin });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

export default registerCity;