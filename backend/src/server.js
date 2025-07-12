// const express = require('express');
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import notesRoutes from './routes/notesRoutes.js';
import { connectDB } from '../config/db.js';

dotenv.config(); // Load environment variables from .env file


const app = express();


// Enable CORS for all origins
app.use(express.json()); // 
app.use(cors(
        {
                origin:"http://localhost:5173", // Allow requests from this origin
            }
        ));
// app.use(cors());
// Enable CORS for all routes


// app.use((req, res,next) => {
    //     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
    //     // console.log("req received");
    
    //     next(); // Call the next middleware or route handler
    
    // });
    app.use("/api/notes", notesRoutes);
    // app.use('/', notesRoutes)
    
    // console.log("Trying to connect to the database....");
    const PORT = process.env.port|| 5001; // Default port if not specified in .env
    connectDB().then(()=>{
 
    app.listen(PORT, () => {
        
        console.log(`Server is running on http://localhost:${PORT}`);
        
    });

}) // Connect to the database
