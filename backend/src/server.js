// // const express = require('express');
// import express from 'express';
// import cors from 'cors';
// import path from 'path';
// import dotenv from 'dotenv';

// import notesRoutes from './routes/notesRoutes.js';
// import { connectDB } from '../config/db.js';

// dotenv.config(); // Load environment variables from .env file


// const app = express();

// const __dirname= path.resolve(); // Get the current directory name
// // Enable CORS for all origins


// app.use(express.json()); // 

// if (process.env.NODE_ENV !== 'production') {
 
//     app.use(cors(
//             {
//                     origin:"http://localhost:5173", // Allow requests from this origin
//                 }
//             ));
    
// }
// // app.use(cors());
// // Enable CORS for all routes


// // app.use((req, res,next) => {
//     //     console.log(`Request Method: ${req.method}, Request URL: ${req.url}`);
//     //     // console.log("req received");
    
//     //     next(); // Call the next middleware or route handler
    
//     // });
//     app.use("/api/notes", notesRoutes);
//     // app.use('/', notesRoutes)
    
// app.use(express.static(path.join(__dirname,"../frontend/dist"))); // Serve static files from the 'public' directory
// if (process.env.NODE_ENV === 'production') {
   
//     app.get('*', (req, res) => {
//         res.sendFile(path.join(__dirname, "../frontend","dist","index.html")); // Serve the index.html file for all other routes
//     });
    
// }

//     // console.log("Trying to connect to the database....");
//     const PORT = process.env.port|| 5001; // Default port if not specified in .env
//     connectDB().then(()=>{
 
//     app.listen(PORT, () => {
        
//         console.log(`Server is running on http://localhost:${PORT}`);
        
//     });

// }) // Connect to the database

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";

import notesRoutes from "./routes/notesRoutes.js";
 import { connectDB } from '../config/db.js';


dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const __dirname = path.resolve();

// middleware
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    })
  );
}
app.use(express.json()); // this middleware will parse JSON bodies: req.body

// our simple custom middleware
// app.use((req, res, next) => {
//   console.log(`Req method is ${req.method} & Req URL is ${req.url}`);
//   next();
// });

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log("Server started on PORT:", PORT);
  });
});