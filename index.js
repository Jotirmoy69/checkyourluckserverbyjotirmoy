import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import userschema from './models/schema.js';

dotenv.config();

const app = express();
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});



app.use(express.json());    
app.use(express.urlencoded({ extended: true }));


app.post('/data', async (req, res) => {
    try {
        console.log(JSON.stringify(req.body));

        const user = await userschema.create({
            name: req.body.name,
            number: req.body.number,
        });

        res.status(200).json({
            message: 'Data received successfully',
            error: false,
            success: true
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: 'Error creating user',
            error: true,
            success: false
        });
    }
});

connectDB().then(() => {
    app.listen(8080, () => {
        console.log("Server is running on port 8080");
    });
}).catch((error) => {
    console.error('Database connection failed:', error);
});
