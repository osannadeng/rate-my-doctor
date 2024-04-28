const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri)
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.error(err));

const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const reviewsRouter = require('./routes/reviews');
app.use('/reviews', reviewsRouter);

const doctorsRouter = require('./routes/doctors');
app.use('/doctors', doctorsRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});