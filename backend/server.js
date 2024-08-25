import express from 'express'
import dotenv from 'dotenv'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import connectToDB from './connectDB/connectDB.js'
import authRoutes from './routes/authRoutes.js'
import postRoutes from './routes/postRoutes.js'

dotenv.config('../.env');
const app = express();


const option = {
    credentials: true,
};

app.use(cookieParser());
app.use(express.json());
app.use(cors(option));

//users
app.use('/api/auth',authRoutes);

//posts
app.use('/api',postRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
    connectToDB();
    console.log('server is running on', PORT);
})