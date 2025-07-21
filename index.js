const dot=require('dotenv');

const express = require('express');
const app = express();


const cors = require('cors');
const AuthRouter = require('.//routes/authrouter');


require('./models/db');
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('PONG');
});


app.use(express.json());

app.use(cors());
app.use('/api', AuthRouter);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

