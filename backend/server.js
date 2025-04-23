/* Servidor Express con Node */
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('<h1>Express Server for E-Commerce App</h1>');
})

app.get('/api', (req, res) => {
    res.json({
        message: 'E-Commerce API is working',
        status: 'success'
    });
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})




