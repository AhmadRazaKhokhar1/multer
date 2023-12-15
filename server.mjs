import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import multerRoute from './routes/multerRoutes.js';
import mongoose from 'mongoose';

dotenv.config();
const uri = process.env.MONGO_URI;
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors()); 

app.use('/uploads/test', express.static('uploads/test'));

app.use('/api', multerRoute)

//DataBase configrations
mongoose.connect(uri);
mongoose.connection.on('connected', ()=>{
    console.log(`Connection Established to Data Base  ✅`);
})
mongoose.connection.on('disconnected', ()=>{
    console.log(`Connection Terminated to Data Base  ❌`);
})
app.listen(port, ()=>{
    console.log(`The server is live at: ${port} 🔥`);
})