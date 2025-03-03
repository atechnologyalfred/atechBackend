import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import router from './routes/route.js';
const app = express();
const PORT = process.env.DB_PORT || 3000;
app.use(cors());
app.use(express.json());
app.use('/', router)


app.listen(PORT, ()=> {

console.log(`Server is working on port ${PORT}`)
})