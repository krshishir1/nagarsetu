const express = require('express');
const { default: mongoose } = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

const adminRouter = require('./routes/city');

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: "Nagar setu API is working" });
});

app.use('/admin', adminRouter);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        app.listen(port, () => {
            console.log(`Server is running at http://localhost:${port}`);
        });
    })
    .catch(err => console.log(err))