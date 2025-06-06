import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import userroutes from './Routes/User.js';
import videoroutes from './Routes/video.js'
import path from 'path'
import commentroutes from './Routes/comment.js'

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json({limit: '30mb', extended: true}))
app.use(express.urlencoded({ limit: '30mb', extended: true }));
app.use('/uploads', express.static(path.join('uploads')))
app.use('/comment',commentroutes)
app.get('/', (req, res) => {
  res.send("Your tube is working")
});

app.use(bodyParser.json());
app.use('/user', userroutes);
app.use('/video', videoroutes)

const  PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

const DB_URL = process.env.DB_URL 
mongoose.connect(DB_URL).then(() => {
    console.log("Connected to MongoDB")
}).catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});