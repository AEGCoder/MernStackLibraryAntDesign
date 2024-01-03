import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './db/db.js';
import router from './routes/bookRouter.js';
dotenv.config();
const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json())
app.use(cors())
app.use(express.json());

// Connect to MongoDB
connectDB();


// Routes
app.use('/api/books',router);


app.get('/',(req,res) => {
    res.send('Hello from Homepage')
} )

app.listen(PORT,() => {
    console.log(`Server running on port ${PORT}`)
})



