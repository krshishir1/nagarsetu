const City = require("../../models/city");
const Joi = require("joi");

const registerDepartment = async (req, res) => {
  try {
    const schema = Joi.object({
      city_id: Joi.string().required(),
      name: Joi.string().required(),
      description: Joi.string(),
      assigned_username: Joi.string().required(),
    });

    const { error } = schema.validate(req.body);

    const isValid = error === undefined || null;
    if (!isValid) throw new Error(error.message);

    const { city_id, name, description, assigned_username } = req.body;

    const department = {
      dept_id: `DEPT-${uuidv4()}`,
      name,
      description,
      assigned_username,
    };

    const updatedCity = await City.updateOne(
      { city_id, $push: { departments: department } },
      { returnDocument: "after" }
    );

    return res.status(200).json({
      message: "Department registered successfully",
      city: updatedCity,
    });

  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

module.exports = registerDepartment;
