const City = require('../../models/city');

const deleteDepartment = async (req, res) => {
    try {

        const {deptId} = req.query

        const updatedCity = await City.updateOne(
            { city_id: req.params.city_id },
            { $pull: { departments: { dept_id: deptId } } },
            { returnDocument: 'after' }
        );

        res.status(200).json({ message: 'Department deleted successfully', city: updatedCity });

    } catch(err) {
        return res.status(500).json({ error: err.message });
    }
}

module.exports = deleteDepartment;