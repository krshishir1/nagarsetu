const City = require('../../models/city');

const getCity = async (req, res) => {
    try {
        const foundCity = await City.findOne({ city_id: req.params.id })
        return res.status(200).json({ ...foundCity });
    }
    catch (err) {s
        return res.status(500).json({ error: err.message });
    }
} 

module.exports = getCity;