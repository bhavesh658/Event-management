const dot=require('dotenv');

// .config();
// const express = require('express');
// const cors = require('cors');
// const bodyParser = require('body-parser'); 

// const connectDB = require('./db');
// const authRoutes = require('./routes/auth');

// const app = express();
// app.use(express.json());

// app.use((req, res, next) => {
//   res.header("Access-Control-Allow-Origin", "http://127.0.0.1:5500");
//   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//   res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
//   next();
// });



// const PORT = 3000 || process.env.PORT;


// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// connectDB();
// app.use('/auth', authRoutes);

// app.use(bodyParser.json());
// app.use(cors());

// app.get('/api',(req,res)=>{
//     res.send('API Running')
// });




const express = require('express');
const app = express();


const cors = require('cors');
const AuthRouter = require('.//routes/authrouter');


require('./models/db');
const PORT = process.env.PORT || 6000;

app.get('/', (req, res) => {
    res.send('PONG');
});


app.use(express.json());

app.use(cors());
app.use('/api', AuthRouter);



app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

