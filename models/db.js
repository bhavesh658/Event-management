const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CON||"mongodb://localhost:27017/Bookmyevent";

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })